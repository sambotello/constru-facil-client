import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // TODO: Replace with your website's URL
    site: 'https://example.com',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
})
