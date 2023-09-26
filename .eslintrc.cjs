module.exports = {
	"env" : {
		"es2021" : true,
		"node" : true,
	},
	"extends" : [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
	],
	"parser" : "@typescript-eslint/parser",
	"parserOptions" : {
		"ecmaVersion" : 13,
		"sourceType" : "module",
	},
	"plugins" : [
		"@typescript-eslint",
	],
	"rules" : {
		"@typescript-eslint/no-this-alias" : "off",
		"@typescript-eslint/explicit-module-boundary-types" : "off",
		"@typescript-eslint/type-annotation-spacing" : [
			"error",
			{
				"before" : true,
			},
		],
		"comma-dangle" : ["error", "always-multiline"],
		"eol-last" : ["error", "always"],
		"key-spacing" : ["error", { "beforeColon" : true }],
		"indent" : [
			"error",
			"tab",
			{
				"SwitchCase" : 1,
			},
		],
		"linebreak-style" : [
			"error",
			"unix",
		],
		"no-inner-declarations" : "off",
		"no-trailing-spaces" : "error",
		"quotes" : [
			"error",
			"double",
			{
				"allowTemplateLiterals" : true,
				"avoidEscape" : true,
			},
		],
		"semi" : [
			"error",
			"always",
		],
		"no-undef" : "error",
		"svelte/valid-compile" : ["error", {ignoreWarnings : true}],
	},
	"overrides" : [
		{
			"files" : ["*.ts"],
			"rules" : {
				"no-undef" : "off",
			},
		},
		{
			files : ["*.svelte"],
			parser : "svelte-eslint-parser",
			parserOptions : {
				parser : "@typescript-eslint/parser",
			},
		},
	],
};
