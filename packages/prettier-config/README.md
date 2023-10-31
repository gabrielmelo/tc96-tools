# @tc96/prettier-config

Prettier configuration for formatter JavaScript projects

## Installation

Install the package and its peer dependencies

```sh
# with npm
npm install --save-dev @tc96-tools/prettier-config
```

# with yarn
```sh
yarn add -D @tc96-tools/prettier-config
```

# with pnpm
```sh
pnpm i -D @tc96-tools/prettier-config
```

## Use
Extend this package in your `.prettierrc` configuration, like this:

**ESModules**
```js
import prettierConfig from "@tc96-tools/prettier-config";

export default {
  ...prettierConfig,
};
```
**CommonJS**
```js
const prettierConfig = require("@tc96-tools/prettier-config");

module.exports = {
  rules: {
		'prettier/prettier': ['error', prettierConfig],
	},
};
