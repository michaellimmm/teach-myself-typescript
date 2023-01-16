/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  verbose: true,
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  modulePaths: ['<rootDir>', 'node_modules'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = config;
