import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts', '<rootDir>/test/config.ts'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

export default config;
