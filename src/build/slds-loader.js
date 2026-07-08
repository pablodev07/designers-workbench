/**
 * SLDS global stylesheets loaded as <link> tags.
 * Supports three themes: SLDS2 - Cosmos, SLDS1 - Lightning Blue, WES for EC.
 */

const slds2CssUrl = new URL(
  '../../node_modules/@salesforce-ux/design-system-2/dist/css/bundled/slds2.cosmos.css',
  import.meta.url
).href;

export const STORAGE_KEY_SLDS_VERSION = 'slds-ui-slds-version';

const SLDS2_KEY = 'slds-plus';
const SLDS1_KEY = 'salesforce-lightning-design-system';
const WES_FONT_KEY = 'wes-font-tokens';
const WES_MAIN_KEY = 'wes-for-ec';
const WES_OVERRIDES_KEY = 'wes-overrides';

let slds1UrlPromise = null;

function getLink(key) {
  return document.querySelector(`link[data-slds="${key}"]`);
}

function ensureLink(key, href, media = 'not all') {
  let link = getLink(key);
  if (!link) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.media = media;
    link.setAttribute('data-slds', key);
    link.href = href;
    document.head.appendChild(link);
  } else if (href && link.getAttribute('href') !== href) {
    link.href = href;
  }
  return link;
}

export function ensureSlds1Loaded() {
  if (!slds1UrlPromise) {
    slds1UrlPromise = import('./slds/slds1-url.js').then((m) => m.default);
  }
  return slds1UrlPromise.then((href) => ensureLink(SLDS1_KEY, href));
}

function ensureWesLoaded() {
  ensureLink(WES_FONT_KEY, '/css/slds-font-tokens.css');
  ensureLink(WES_MAIN_KEY, '/css/wes-for-ec-offline.css');
  ensureLink(WES_OVERRIDES_KEY, '/css/wes-overrides.css');
}

function deactivateWesLinks() {
  const keys = [WES_FONT_KEY, WES_MAIN_KEY, WES_OVERRIDES_KEY];
  keys.forEach((key) => {
    const link = getLink(key);
    if (link) link.media = 'not all';
  });
}

function activateWesLinks() {
  ensureWesLoaded();
  const keys = [WES_FONT_KEY, WES_MAIN_KEY, WES_OVERRIDES_KEY];
  keys.forEach((key) => {
    const link = getLink(key);
    if (link) link.media = 'all';
  });
}

export async function initSldsFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
  if (saved === '1') {
    const slds2Link = ensureLink(SLDS2_KEY, slds2CssUrl);
    const slds1Link = await ensureSlds1Loaded();
    slds1Link.media = 'all';
    slds2Link.media = 'not all';
  } else if (saved === 'wes') {
    ensureLink(SLDS2_KEY, slds2CssUrl);
    activateWesLinks();
  } else {
    ensureLink(SLDS2_KEY, slds2CssUrl, 'all');
  }
}

export function activateSLDS2() {
  const slds2 = getLink(SLDS2_KEY);
  const slds1 = getLink(SLDS1_KEY);
  if (slds2) slds2.media = 'all';
  if (slds1) slds1.media = 'not all';
  deactivateWesLinks();
}

export async function activateSLDS1() {
  const slds1 = await ensureSlds1Loaded();
  const slds2 = getLink(SLDS2_KEY);
  if (slds2) slds2.media = 'not all';
  slds1.media = 'all';
  deactivateWesLinks();
}

export function activateWES() {
  const slds2 = getLink(SLDS2_KEY);
  const slds1 = getLink(SLDS1_KEY);
  if (slds2) slds2.media = 'not all';
  if (slds1) slds1.media = 'not all';
  activateWesLinks();
}

export async function toggleSLDS() {
  const slds2 = getLink(SLDS2_KEY);
  if (!slds2) return;
  const usingSlds2 = slds2.media !== 'not all';
  if (usingSlds2) {
    await activateSLDS1();
  } else {
    activateSLDS2();
  }
}

export function activeTheme() {
  const wesMain = getLink(WES_MAIN_KEY);
  if (wesMain && wesMain.media !== 'not all') return 'wes';
  const slds2 = getLink(SLDS2_KEY);
  return slds2 && slds2.media !== 'not all' ? 'ds2' : 'slds1';
}

export function activeSLDSVersion() {
  const theme = activeTheme();
  if (theme === 'slds1') return 1;
  return 2;
}

export function activeSldsLink() {
  const slds2 = getLink(SLDS2_KEY);
  return slds2 && slds2.media !== 'not all' ? slds2 : getLink(SLDS1_KEY);
}
