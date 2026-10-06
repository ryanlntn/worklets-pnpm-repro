module.exports = {
  preset: "@react-native/jest-preset",
  resolver: "react-native-reanimated/jest/resolver",
  setupFiles: ["./jest.setup.js"],
  transformIgnorePatterns: ["node_modules/(?!(\\.pnpm|react-native|@react-native|react-native-reanimated|react-native-worklets)/)"],
}
