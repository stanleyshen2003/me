const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
	{
		ignores: ["dist/**", "build/**", "src/data/myAlbums/*.mjs", "src/App.test.js"],
	},
	js.configs.recommended,
	{
		files: ["src/**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^React$" },
			],
		},
	},
];
