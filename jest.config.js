const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleFileExtensions : ["js","tsx","ts"],
  roots: ["<rootDir>/","<rootDir>/test/"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@apollo/apollo-client$': '<rootDir>/node_modules/@apollo/apollo-client',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  testEnvironment: "jsdom",
};
module.exports = createJestConfig(customJestConfig);