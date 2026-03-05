import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
    base: './',
    resolve: {
        alias: {
            'assets': fileURLToPath(new URL('../assets', import.meta.url)),
            'stake-engine': fileURLToPath(new URL('/Users/candelibas/igaming/ts-client/src/index.ts', import.meta.url))
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/**/*',
                    dest: 'assets'
                }
            ]
        })
    ],
    logLevel: 'warning',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                passes: 2,
                drop_console: true,
                drop_debugger: true
            },
            mangle: true,
            format: {
                comments: false
            }
        }
    },
    server: {
        port: 8080
    }
});