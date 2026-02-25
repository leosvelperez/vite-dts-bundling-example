/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'unplugin-dts/vite';
import * as path from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/pkg1',
  plugins: [
    dts({
      tsconfigPath: path.join(import.meta.dirname, 'tsconfig.lib.json'),
      compilerOptions: {
        customConditions: ['non-existing'],
      },
      bundleTypes: {
        bundledPackages: ['@bar/*'],
      },
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  // Configuration for building your library.
  // See: https://vite.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@bar/pkg1',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  },
}));
