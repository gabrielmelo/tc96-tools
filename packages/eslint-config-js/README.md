# @tc96/eslint-config-js

ESLint configuration for JavaScript projects

## Installation

Install the package and its peer dependencies

```sh
# with npm
npm install --save-dev @tc96/eslint-config-js eslint prettier

# with yarn
yarn add -D @tc96/eslint-config-js eslint prettier

# with pnpm
pnpm i -D @tc96/eslint-config-js eslint prettier
```

Extend this package in your `.eslintrc.*` configuration, like this:

```js
module.exports = {
	eslintConfig: {
		extends: '@tc96/eslint-config-js',
	},
}
```
