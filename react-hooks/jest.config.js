/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {

  preset: 'ts-jest',

  // 自动清除mock
  clearMocks: true,
  // 添加测试环境
  // testEnvironment: 'jsdom',
  // testEnvironment: 'jest-environment-jsdom-global',
  testEnvironment: 'jsdom', // 改回来

  // 开启覆盖率
  collectCoverage: true,
  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // moduleDirectories: ['node_modules', 'src']
  /* moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  } */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  // 安装测试框架之后 执行的代码
  setupFilesAfterEnv: ['./tests/jest-setup.ts'],
  // 转换文件
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  }
}

