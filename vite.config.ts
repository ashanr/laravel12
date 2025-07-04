import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import glob from 'fast-glob';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                app: './resources/js/app.tsx',
                // Make sure all page components are included in the build
                ...glob.sync('./resources/js/pages/**/*.tsx').reduce((entries, path) => {
                    const name = path.replace('./resources/js/pages/', '').replace('.tsx', '')
                    return { ...entries, [name]: path }
                }, {})
            }
        }
    }
});
