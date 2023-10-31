# @tc96/eslint-config

ESLint configuration for JavaScript projects

## Installation

Install the package and its peer dependencies

**with npm**
```sh
npm install --save-dev @tc96-tools/eslint-config
``````

**with yarn**
```sh
yarn add -D @tc96-tools/eslint-config
```
**with pnpm**
```sh
pnpm i -D @tc96-tools/eslint-config
```

## Use
Extend this package in your `.eslintrc.*` configuration, like this:

**browser**
```js
module.exports = {
	extends: '@tc96-tools/eslint-config/browser',
}
```
**node**
```js
module.exports = {
	extends: '@tc96-tools/eslint-config/node',
}
```
