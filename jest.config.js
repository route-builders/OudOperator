/* eslint-disable no-undef */
module.exports = {
  roots: ['<rootDir>/tests'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
