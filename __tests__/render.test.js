const React = require("react")
const { act, create } = require("react-test-renderer")
const Animated = require("react-native-reanimated").default
const { useSharedValue, useAnimatedStyle } = require("react-native-reanimated")

function Box() {
  const width = useSharedValue(100)
  const style = useAnimatedStyle(() => ({ width: width.value }))
  return React.createElement(Animated.View, { testID: "box", style })
}

test("renders an Animated.View", () => {
  let tree
  act(() => {
    tree = create(React.createElement(Box))
  })
  expect(tree.root.findByProps({ testID: "box" })).toBeDefined()
})
