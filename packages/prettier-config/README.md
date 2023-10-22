# @tc96/prettier-config

Prettier configuration for formatter JavaScript projects

## Installation

Install the package and its peer dependencies

```sh
# with npm
npm install --save-dev @tc96-tools/prettier-config

# with yarn
yarn add -D @tc96-tools/prettier-config

# with pnpm
pnpm i -D @tc96-tools/prettier-config
```

Extend this package in your `.prettierrc` configuration, like this:

**ES modules**
```js
import prettierConfig from "@tc96-tools/prettier-config";

export default {
  ...prettierConfig,
};
```
**Commonjs**
```js
const prettierConfig = require("@tc96-tools/prettier-config");

module.exports = {
  rules: {
		'prettier/prettier': ['error', prettierConfig],
	},
};
