# Text Styles (SLDS 2 type scale)

**Always apply the library's text styles — never hardcode `fontSize`/`fontName`.**
Family is **SF Pro** for every style; line heights are baked in. Color is NOT
part of a text style — bind it separately (see [color-tokens](color-tokens.md)).

```js
const styleCache = {};
async function applyTextStyle(textNode, styleKey) {
  if (!styleCache[styleKey]) styleCache[styleKey] = await figma.importStyleByKeyAsync(styleKey);
  await textNode.setTextStyleIdAsync(styleCache[styleKey].id);
}
```

## Role → style (recommended defaults)

| Layout role | Text style |
|---|---|
| Record title (page header H1) | `Titles/font-scale-4/Semibold` (24) |
| Section / card heading | `Body/font-scale-1/Semibold` (14) |
| Tab label (inactive) | `Body/font-scale-1/Regular` (14) |
| Tab label (active) | `Body/font-scale-1/Semibold` (14) |
| Body / field value | `Body/font-scale-base/Regular` (13) |
| Field label | `Body/font-scale-neg-1/Regular` (12) |
| Metadata / timestamps | `Body/font-scale-neg-1/Regular` (12) |
| Micro-label / overline | `Body/font-scale-neg-2/Semibold` (10) |
| Link text | `Body/font-scale-base/Underline Regular` (13) |
| KPI / large metric number | `Titles/font-scale-5/Regular` (28) |

## Style keys (import-ready)

| Style | Key |
|---|---|
| Body/font-scale-neg-2/Regular | `8099cc6baf4f52009cbef0c2b423927ef46b1da9` |
| Body/font-scale-neg-2/Semibold | `70c6f5e90751ca076207b89c06ba05b4e3a1387e` |
| Body/font-scale-neg-1/Regular | `07c72ec34dad99619c48dac4d82eb5d66b923374` |
| Body/font-scale-neg-1/Semibold | `f34577fa21371861c5bff926323567f9be95731e` |
| Body/font-scale-base/Regular | `a23070ffe6897b0dfd4fe852765b15c7e062aeea` |
| Body/font-scale-base/Semibold | `b53da3e8b5de77a01f108bd6efd2e36e6d18d563` |
| Body/font-scale-base/Bold | `b84b5f5ee60a2c800abb5fb23d68d187385bad5a` |
| Body/font-scale-base/Underline Regular | `4312c24bd3ce3b892840d3d253c892092b59a52d` |
| Body/font-scale-1/Regular | `db5ea1e3ceba09167eb0dcc5856f22b32d1e5cd4` |
| Body/font-scale-1/Semibold | `75e25ee41b3086d7f0c7badec11f29de06dd251f` |
| Body/font-scale-2/Regular | `9e0bbbd57d2fee5e1c40aae187845793eead263d` |
| Body/font-scale-2/Semibold | `91d8dfccc980fab88b1eee549cdf8509fdffc091` |
| Titles/font-scale-3/Regular | `e86714266b93f3762e75dca49752caff31e5cccb` |
| Titles/font-scale-3/Semibold | `6ceb2ea836d2165f086a501339ff979cd8ccb012` |
| Titles/font-scale-4/Regular | `9e011d2e7479c122cb484f683f3870ba79ad2070` |
| Titles/font-scale-4/Semibold | `ac55d43693d53705a2e11c666407cc918fc70f71` |
| Titles/font-scale-5/Regular | `aec75edfbf1e0ba9f64afb628d46d213f5082e2e` |
| Titles/font-scale-6/Regular | `c13637bf5b4761260de4cd2002e0a9bdcf4a6e22` |
| Display/font-scale-7/Light | `1ab605f2b9b6b4c5ee6b60e82b1fdb3e72e23c91` |
| Display/font-scale-8/Light | `89815f71eb638fe224489ec5124b23efe717c0e5` |

**Font loading required.** Load `SF Pro` (Regular / Semibold / Bold / Light)
before any `characters` write.
