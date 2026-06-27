import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// SLDS font tokens extraction
const fontTokens = require.resolve(
  '@salesforce-ux/design-system/design-tokens/dist/font.custom-props.scss'
);
const rawFontTokens = readFileSync(fontTokens, 'utf8');
const fontTokensContent = [
  '/* SLDS Font Design Tokens (auto-extracted from @salesforce-ux/design-system, do not edit) */',
  '/* Wrapped in @layer so theme-specific overrides take precedence */',
  `@layer defaults {\n${rawFontTokens}\n}`,
].join('\n');
writeFileSync('public/css/slds-font-tokens.css', fontTokensContent);
console.log(' Built public/css/slds-font-tokens.css');

// WES for EC offline bundle (SLDS + WES combined)
const slds = require.resolve(
  '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system-offline.min.css'
);
const wesForEc = require.resolve('@salesforce/wes-for-ec/dist/wes_for_ec.css');

const wesOutput = [
  '/* WES for EC Offline - SLDS + WES bundle (auto-generated, do not edit) */',
  'html { background-color: white; }',
  readFileSync(slds, 'utf8'),
  readFileSync(wesForEc, 'utf8'),
].join('\n');
writeFileSync('public/css/wes-for-ec-offline.css', wesOutput);
console.log(' Built public/css/wes-for-ec-offline.css');
