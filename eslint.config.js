import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
            // A11y
            ...jsxA11y.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            'jsx-a11y/anchor-is-valid': 'warn',
            'astro/no-set-html-directive': 'error',
            'astro/no-unused-define-vars-in-style': 'warn',
        },
    },
]
