/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    "@just_testing13/icon$": "<rootDir>/packages/icons/core/src",
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", './scripts/setup-test.ts'],
  testTimeout: 10000,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
