module.exports = {
	env: {
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', require('@tc96-tools/prettier-config')],
		'no-implicit-globals': 'error',
		'no-unused-vars': 'error',
		'no-dupe-args': 'error',
		'no-debugger': 'error',
		'no-duplicate-imports': 'error',
		'arrow-body-style': ['error', 'always'],
		camelcase: 'error',
	},
	noInlineConfig: true,
	root: true,
}
