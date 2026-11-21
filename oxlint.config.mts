import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["typescript", "import", "unicorn"],

	categories: {
		correctness: "error",
		suspicious: "warn",
		pedantic: "warn",
		perf: "warn",
		style: "off",
		restriction: "off",
	},

	rules: {
		// JavaScript
		"no-debugger": "error",
		"no-duplicate-imports": "error",
		"no-constant-condition": "error",
		"no-unreachable": "error",
		eqeqeq: "error",
		"no-var": "error",
		"prefer-const": "error",
		"no-console": "warn",

		// TypeScript
		"typescript/no-explicit-any": "warn",
		"typescript/no-non-null-assertion": "warn",
		"typescript/no-unused-vars": "error",

		// Imports
		"import/no-duplicates": "error",
	},

	ignorePatterns: ["node_modules/**", "dist/**", "coverage/**"],

	overrides: [
		{
			files: ["tests/**/*.ts", "**/*.test.ts", "**/*.spec.ts"],
			env: {
				vitest: true,
			},
			rules: {
				"no-console": "off",
			},
		},
	],
});
