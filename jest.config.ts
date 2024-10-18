import { swcAngularJestTransformer } from '@jscutlery/swc-angular-preset';
import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/projects/demo/src/app/**/*.spec.ts',
    '<rootDir>/projects/ngx-if-platform/src/lib/**/*.spec.ts'
  ],
  collectCoverageFrom: [
    '<rootDir>/projects/ngx-if-platform/src/lib/**/*.ts',
    '!<rootDir>/projects/ngx-if-platform/src/lib/**/index.ts'
  ],
  moduleNameMapper: {
    'projects/ngx-if-platform/src/public-api': '<rootDir>/projects/ngx-if-platform/src/public-api'
  },
  transform: {
    '^.+\\.(ts|mjs|js)$': swcAngularJestTransformer(),
    '^.+\\.(html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  testPathIgnorePatterns: ['<rootDir>/dist/']
};

export default config;
