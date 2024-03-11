import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
  entry: {
    index: 'src/index.ts',
    kintsugi: 'src/temp/css/theme.kintsugi.css',
    interlay: 'src/temp/css/theme.interlay.css',
    bob: 'src/temp/css/theme.bob.css'
  },
  dts: {
    entry: {
      index: 'src/index.ts'
    }
  }
});
