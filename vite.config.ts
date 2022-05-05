import { defineConfig, UserConfigExport } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import scriptSetup from 'unplugin-vue2-script-setup/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default (): UserConfigExport => {
    const plugins = [
        vue2(),
        scriptSetup(),
    ];

    return defineConfig({
        plugins: plugins,
        root: 'src',
        base: '/',
        resolve: { alias: { '@': resolve(__dirname, './src') } },
        server: { host: '0.0.0.0' },
    });
};
