module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: [
    "./node_modules/jest-enzyme/lib/index.js",
    "<rootDir>jest.setup.js"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|react-native-screens" +
      "|react-native-reanimated" +
      "|@react-navigation" +
      "|expo" +
      "|@expo" +
      "|expo-splash-screen" +
      "|expo-asset" +
      "|expo-constants" +
      "|react-native-modal" +
      "|react-native-animatable" +
      "|expo-updates" +
      "|@react-native-community/art" +
      "|expo-secure-store" +
      ")/?)",
  ],
  coverageReporters: [
    "json-summary", // plus any other reporters, e.g. 'lcov', 'text', 'text-summary'
    "html",
    "text-summary",
  ],
  coverageThreshold: {
    global: {
      functions: 50.00,
      branches: 50.00,
      lines: 50.00,
      statements: 50.00,
    },
  },
};
