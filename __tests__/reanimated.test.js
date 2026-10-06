const { useSharedValue } = require("react-native-reanimated")

test("imports Reanimated", () => {
  expect(useSharedValue).toBeDefined()
})
