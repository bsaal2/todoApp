import { type JestConfigWithTsJest } from 'ts-jest'; 

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            // Put ts-jest config here
            tsconfig: './tsconfig.test.json',
          }],
    },
    testEnvironment: 'jsdom'
};

export default config;