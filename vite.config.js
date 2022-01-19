import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * Vite configuration for library build
 *
 * @doc https://vitejs.dev/config/
 */
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src', 'index.ts'),
            name: 'InklineNuxt',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            output: {
                exports: 'named'
            }
        }
    }
});
