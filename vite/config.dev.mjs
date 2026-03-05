import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
    
    base: './',
    resolve: {
        alias: {
            'assets': fileURLToPath(new URL('../assets', import.meta.url)),
            'stake-engine': fileURLToPath(new URL('/Users/candelibas/igaming/ts-client/src/index.ts', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        port: 8080
    }
});