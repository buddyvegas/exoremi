import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'text'],
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: [
        'src/main.tsx',
        'src/**/index.ts',
        'src/**/*.spec.tsx',
        'src/mocks/*',
        'src/tests/**/*',
        'public/',
      ],
    },
    reporters: 'verbose',
    globals: true,
    setupFiles: 'src/tests/setupTests.ts',
    environment: 'jsdom',
    testTimeout: 10000,
    fileParallelism: process.env.CI === 'true' ? false : true,
  },
});
