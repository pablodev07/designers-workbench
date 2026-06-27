import { createElement } from 'lwc';
import App from 'shell/app';
import { initSldsFromStorage, activeSldsLink } from './build/slds-loader.js';

await initSldsFromStorage();

const globalCssUrl = new URL('./styles/global.css', import.meta.url).href;
const globalLink = document.createElement('link');
globalLink.rel = 'stylesheet';
globalLink.href = globalCssUrl;
document.head.appendChild(globalLink);

try {
  const app = createElement('shell-app', { is: App });
  document.querySelector('#app').appendChild(app);
} catch (err) {
  console.error('[LWC bootstrap] Failed to mount app:', err);
}

const link = activeSldsLink();
if (link && !link.sheet) {
  await new Promise((r) => { link.addEventListener('load', r, { once: true }); });
}
document.getElementById('app')?.classList.add('is-ready');

Promise.all([
  import('lightning/iconSvgTemplatesUtility'),
  import('lightning/iconSvgTemplatesStandard'),
  import('lightning/iconSvgTemplatesDoctype'),
  import('lightning/iconSvgTemplatesAction'),
]).catch(() => {});
