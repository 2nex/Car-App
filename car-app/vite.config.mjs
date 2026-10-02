import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';

const local = path => fileURLToPath(new URL(path, import.meta.url));
const extensions = ['.web.mjs', '.mjs', '.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json'];

export default defineConfig({
  plugins: [
    {
      name: 'native-image-assets',
      enforce: 'pre',
      transform(code, id) {
        if (!id.startsWith(local('./app/')) || !/\.[jt]sx?$/.test(id)) return;
        const imports = [];
        const transformed = code.replace(/require\(['"]([^'"]+\.(?:png|jpe?g))['"]\)/g, (_, path) => {
          const name = `imageAsset${imports.length}`;
          imports.push(`import ${name} from '${path}';`);
          return name;
        });
        if (imports.length) return {code: `${imports.join('\n')}\n${transformed}`, map: null};
      },
    },
    react(),
  ],
  resolve: {
    extensions,
    alias: [
      {find: /^react-native$/, replacement: 'react-native-web'},
      {find: /^react-native-vector-icons\/(\w+)$/, replacement: 'react-native-vector-icons/dist/$1.js'},
      {find: 'react-native-linear-gradient', replacement: local('./web/linear-gradient.tsx')},
      {find: /^react-native-image-picker$/, replacement: local('./web/image-picker.ts')},
    ],
  },
  define: {__DEV__: true, global: 'globalThis'},
  optimizeDeps: {esbuildOptions: {resolveExtensions: extensions}},
  server: {host: '0.0.0.0', port: 3000, watch: {usePolling: true}},
});
