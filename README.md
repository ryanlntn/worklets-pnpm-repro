# react-native-worklets Jest resolver pnpm repro

`react-native-reanimated/jest/resolver` (added in [software-mansion/react-native-reanimated#10377](https://github.com/software-mansion/react-native-reanimated/pull/10377)) resolves the web implementation of every Reanimated module when installed with pnpm.

It falls back to `react-native-worklets/jest/resolver`, which strips `.native` extensions whenever `options.basedir` contains `react-native-worklets`. pnpm puts peer dependencies in store directory names, so Reanimated lives at:

```
node_modules/.pnpm/react-native-reanimated@4.7.1_react-native-worklets@0.13.0_…/node_modules/react-native-reanimated/
```

Every `basedir` inside Reanimated matches, so Reanimated loads its web build under Jest.

## Reproduce

```sh
pnpm install
pnpm test
```

Both suites fail on import:

```
Cannot find module 'react-native-web/dist/cjs/exports/StyleSheet/compiler/createReactDOMStyle.js' from 'node_modules/.pnpm/react-native-reanimated@4.7.1_react-native-worklets@0.13.0_…/node_modules/react-native-reanimated/lib/module/ReanimatedModule/js-reanimated/webUtils.js'
```

With `nodeLinker: hoisted` in `pnpm-workspace.yaml` (a flat `node_modules`, no peer suffixes in paths) both suites pass.

## Versions

- react-native-reanimated 4.7.1
- react-native-worklets 0.13.0
- react-native 0.88.0-rc.3
- jest 30.5.2
- pnpm 11+
