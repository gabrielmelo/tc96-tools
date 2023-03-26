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
				arrowParens: 'always',
				bracketSpacing: true,
				bracketSameLine: false,
				printWidth: 80,
				useTabs: true,
				tabWidth: 2,
				semi: false,
				singleQuote: true,
			},
		],
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
}
