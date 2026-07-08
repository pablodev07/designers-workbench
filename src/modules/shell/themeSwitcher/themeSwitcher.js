import { LightningElement, api } from 'lwc';
import { ensureSlds1Loaded } from '../../../build/slds-loader';

export default class ThemeSwitcher extends LightningElement {
    @api activeTheme = 'ds2';
    @api darkMode = false;
    isCardOpen = false;
    isCardClosing = false;

    get showDarkModeButton() {
        return this.activeTheme === 'ds2';
    }

    get darkModeLabel() {
        return this.darkMode ? 'Light Mode' : 'Dark Mode';
    }

    get themeOptions() {
        return [
            { label: 'SLDS2 - Cosmos', value: 'ds2', variant: this.activeTheme === 'ds2' ? 'brand' : 'neutral' },
            { label: 'SLDS1 - Lightning Blue', value: 'slds1', variant: this.activeTheme === 'slds1' ? 'brand' : 'neutral' },
            { label: 'WES for EC', value: 'wes', variant: this.activeTheme === 'wes' ? 'brand' : 'neutral' },
        ];
    }

    disconnectedCallback() {
        window.removeEventListener('click', this._handleWindowClick);
    }

    get showCard() {
        return this.isCardOpen || this.isCardClosing;
    }

    get cardWrapperClass() {
        const base = 'theme-switcher-card-wrapper';
        return this.isCardClosing ? `${base} ${base}--closing` : base;
    }

    handleIconClick() {
        if (this.isCardOpen) {
            this._beginCloseCard();
        } else if (this.isCardClosing) {
            this.isCardClosing = false;
            this.isCardOpen = true;
            setTimeout(() => {
                window.addEventListener('click', this._handleWindowClick);
            }, 0);
        } else {
            this.isCardOpen = true;
            ensureSlds1Loaded();
            setTimeout(() => {
                window.addEventListener('click', this._handleWindowClick);
            }, 0);
        }
    }

    _beginCloseCard() {
        this.isCardOpen = false;
        window.removeEventListener('click', this._handleWindowClick);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.isCardClosing = false;
            return;
        }
        this.isCardClosing = true;
    }

    handleCardWrapperAnimationEnd(event) {
        if (event.animationName !== 'theme-switcher-card-close') {
            return;
        }
        this.isCardClosing = false;
    }

    _handleWindowClick = (event) => {
        if (!this.isCardOpen) {
            return;
        }
        const path = event.composedPath();
        if (!path.includes(this.template.host)) {
            this._beginCloseCard();
        }
    };

    handleThemeSelect(event) {
        const theme = event.currentTarget.dataset.theme;
        if (theme && theme !== this.activeTheme) {
            this.dispatchEvent(new CustomEvent('themechange', { bubbles: true, composed: true, detail: { theme } }));
        }
    }

    handleToggleDarkModeClick() {
        this.dispatchEvent(new CustomEvent('toggledarkmode', { bubbles: true, composed: true }));
    }
}
