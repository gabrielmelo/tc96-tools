const prettier = require('../prettier-config')

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				...prettier,
			},
		],
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
}
