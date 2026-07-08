import { LightningElement } from 'lwc';
import { subscribe, navigate, linkHref, setCurrentAppForLinks } from '../../../router';
import { routes } from '../../../routes.config';
import {
    apps,
    getAppById,
    getPersistedAppId,
    persistAppId,
    DEFAULT_APP_ID,
} from '../../../apps.config';
import { activateSLDS2, activateSLDS1, activateWES, activeTheme, activeSLDSVersion, STORAGE_KEY_SLDS_VERSION } from '../../../build/slds-loader';
import Home from 'page/home';
import IconTest from 'page/iconTest';
import Contacts from 'page/contacts';
import ContactDetail from 'page/contactDetail';
import Builder from 'page/builder';
import MyComponents from 'page/myComponents';
import NotFound from 'page/notFound';

const ROUTE_COMPONENTS = {
    'page-home': Home,
    'page-icon-test': IconTest,
    'page-contacts': Contacts,
    'page-contact-detail': ContactDetail,
    'page-my-components': MyComponents,
    'page-builder': Builder,
};

const ROUTE_TO_NAV_PAGE = Object.fromEntries(
    routes.filter((r) => r.navPage || r.navHighlight).map((r) => [r.component, r.navPage ?? r.navHighlight])
);

const NAV_PAGE_TO_PATH = Object.fromEntries(
    routes.filter((r) => r.navPage).map((r) => [r.navPage, r.navPath ?? r.path])
);

const NAV_PAGE_TO_ROUTE = Object.fromEntries(
    routes.filter((r) => r.navPage).map((r) => [r.navPage, r])
);

const STORAGE_KEY_DARK_MODE = 'slds-ui-dark-mode';

export default class App extends LightningElement {
    route;
    _sldsVersion = 2;
    _activeTheme = 'ds2';
    _darkMode = false;
    _currentApp = getPersistedAppId() || DEFAULT_APP_ID;
    selectedPanel = 'agentforce_panel';
    isPanelOpen = false;

    get componentCtor() {
        if (!this.route) return NotFound;
        const name = this.route.component;
        return ROUTE_COMPONENTS[name] ?? NotFound;
    }

    get currentNavPage() {
        const name = this.route?.component;
        return name ? (ROUTE_TO_NAV_PAGE[name] ?? 'home') : 'home';
    }

    get currentApp() {
        return this._currentApp;
    }

    get currentAppVariant() {
        const app = getAppById(this._currentApp) || getAppById(DEFAULT_APP_ID);
        return app?.variant ?? 'standard';
    }

    get isBuilderApp() {
        return this.currentAppVariant === 'builder';
    }

    get navItems() {
        const app = getAppById(this._currentApp) || getAppById(DEFAULT_APP_ID);
        return app.pages
            .map((pageId) => NAV_PAGE_TO_ROUTE[pageId])
            .filter(Boolean)
            .map((r) => {
                const path = r.navPath ?? r.path;
                return { page: r.navPage, label: r.navLabel, path, href: linkHref(path) };
            });
    }

    get pagesInCurrentApp() {
        const current = this.currentNavPage;
        return this.navItems.map((item) => ({
            page: item.page,
            label: item.label,
            href: item.href,
            isCurrent: item.page === current,
        }));
    }

    get appItems() {
        return apps.map((a) => ({
            id: a.id,
            label: a.label,
            href: linkHref(a.defaultPath, a.id),
            isCurrent: a.id === this._currentApp,
        }));
    }

    get isWesActive() {
        return this._activeTheme === 'wes';
    }

    get appMainInnerClass() {
        return this.isWesActive ? 'app-main__inner wes-page wes-style wes-theme wes-npm' : 'app-main__inner';
    }

    connectedCallback() {
        this._restorePreferences();
        this._activeTheme = activeTheme();
        this._sldsVersion = activeSLDSVersion();
        setCurrentAppForLinks(this._currentApp);
        this.unsubscribe = subscribe((route) => {
            this.route = route;
            const newApp = route?.app;
            if (newApp && newApp !== this._currentApp) {
                this._currentApp = newApp;
                persistAppId(newApp);
                setCurrentAppForLinks(newApp);
            }
            this._syncBuilderRootClass();
        });
    }

    _syncBuilderRootClass() {
        document.documentElement.classList.toggle('builder-active', this.isBuilderApp);
    }

    _restorePreferences() {
        const savedVersion = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
        const savedDarkMode = localStorage.getItem(STORAGE_KEY_DARK_MODE);
        const version = savedVersion === '1' ? 1 : 2;
        if (savedDarkMode === 'true' && version === 2) {
            this._darkMode = true;
            document.body.classList.add('slds-color-scheme_dark');
        } else if (savedDarkMode === 'false') {
            this._darkMode = false;
            document.body.classList.remove('slds-color-scheme_dark');
        }
    }

    disconnectedCallback() {
        this.unsubscribe?.();
        document.documentElement.classList.remove('builder-active');
    }

    async handleThemeChange(event) {
        const theme = event.detail?.theme;
        if (!theme) return;

        if (theme === 'ds2') {
            activateSLDS2();
        } else if (theme === 'slds1') {
            await activateSLDS1();
        } else if (theme === 'wes') {
            activateWES();
        }

        this._activeTheme = theme;
        this._sldsVersion = activeSLDSVersion();
        localStorage.setItem(STORAGE_KEY_SLDS_VERSION, theme === 'wes' ? 'wes' : String(this._sldsVersion));

        if (theme !== 'ds2' && this._darkMode) {
            this._darkMode = false;
            document.body.classList.remove('slds-color-scheme_dark');
            localStorage.setItem(STORAGE_KEY_DARK_MODE, 'false');
        }
    }

    handleToggleDarkMode() {
        this._darkMode = !this._darkMode;
        document.body.classList.toggle('slds-color-scheme_dark', this._darkMode);
        localStorage.setItem(STORAGE_KEY_DARK_MODE, String(this._darkMode));
    }

    handleNavNavigate(event) {
        const page = event.detail?.page;
        const path = page ? NAV_PAGE_TO_PATH[page] : '/';
        navigate(path);
    }

    handleAppSwitch(event) {
        const appId = event.detail?.app;
        const target = getAppById(appId);
        if (!target) return;
        this._currentApp = appId;
        persistAppId(appId);
        setCurrentAppForLinks(appId);
        navigate(target.defaultPath);
    }

    handleBuilderExit() {
        const target = getAppById(DEFAULT_APP_ID);
        if (!target) return;
        this._currentApp = target.id;
        persistAppId(target.id);
        setCurrentAppForLinks(target.id);
        navigate(target.defaultPath);
    }

    handlePanelSelect(event) {
        this.selectedPanel = event.detail?.name ?? this.selectedPanel;
        this.isPanelOpen = true;
    }

    handlePanelClose() {
        this.isPanelOpen = false;
    }

    get panelClasses() {
        return `slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right ${this.isPanelOpen ? 'slds-is-open' : ''}`;
    }

    handleNavigateBack() {
        history.back();
    }
}
