/**
 * SLDS global stylesheets loaded as <link> tags.
 * Toggle between SLDS1 - Lightning Blue (classic) and SLDS2 - Cosmos via media attribute.
 */

const slds2CssUrl = new URL(
  '../../node_modules/@salesforce-ux/design-system-2/dist/css/bundled/slds2.cosmos.css',
  import.meta.url
).href;

export const STORAGE_KEY_SLDS_VERSION = 'slds-ui-slds-version';

const SLDS2_KEY = 'slds-plus';
const SLDS1_KEY = 'salesforce-lightning-design-system';

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

export async function initSldsFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
  if (saved === '1') {
    const slds2Link = ensureLink(SLDS2_KEY, slds2CssUrl);
    const slds1Link = await ensureSlds1Loaded();
    slds1Link.media = 'all';
    slds2Link.media = 'not all';
  } else {
    ensureLink(SLDS2_KEY, slds2CssUrl, 'all');
  }
}

export function activateSLDS2() {
  const slds2 = getLink(SLDS2_KEY);
  const slds1 = getLink(SLDS1_KEY);
  if (slds2) slds2.media = 'all';
  if (slds1) slds1.media = 'not all';
}

export async function activateSLDS1() {
  const slds1 = await ensureSlds1Loaded();
  const slds2 = getLink(SLDS2_KEY);
  if (slds2) slds2.media = 'not all';
  slds1.media = 'all';
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

export function activeSLDSVersion() {
  const slds2 = getLink(SLDS2_KEY);
  return slds2 && slds2.media !== 'not all' ? 2 : 1;
}

export function activeSldsLink() {
  const slds2 = getLink(SLDS2_KEY);
  return slds2 && slds2.media !== 'not all' ? slds2 : getLink(SLDS1_KEY);
}
