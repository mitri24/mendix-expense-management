
const configUtils = require("/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native/metro-config/dist");
const path = require("path");

const metroConfig = {
    watchFolders: [
        path.resolve(__dirname, "/Users/mireiotrinley/Desktop/ERP_Projekt/theme"),
        path.resolve(__dirname, "/Users/mireiotrinley/Desktop/ERP_Projekt/javascriptsource"),
        path.resolve(__dirname, "/Users/mireiotrinley/Desktop/ERP_Projekt/themesource"),
        path.resolve(__dirname, "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules"),
    ],
    resolver: {
        useWatchman: false,
        platforms: ["ios", "android"],
        sourceExts: ["native.js", "js", "jsx", "ts", "tsx", "cjs", "mjs", "json", "js_commonjs-exports", "js_commonjs-module"],
        extraNodeModules: {
            "@babel/runtime": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@babel/runtime",
            "big.js": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/big.js",
            "react": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react",
            "react-dom": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-dom",
            "react-native-gesture-handler": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-gesture-handler",
            "react-native": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native",
            "@react-native-community/cli": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-community/cli",
            "@react-native-community/cli-platform-android": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-community/cli-platform-android",
            "@react-native-community/cli-platform-ios": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-community/cli-platform-ios",
            "react-native-device-info": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-device-info",
            "react-native-material-menu": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-material-menu",
            "@react-navigation/bottom-tabs": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-navigation/bottom-tabs",
            "@react-navigation/core": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-navigation/core",
            "@react-navigation/drawer": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-navigation/drawer",
            "@react-navigation/native": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-navigation/native",
            "@react-navigation/stack": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-navigation/stack",
            "react-native-svg": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-svg",
            "react-native-tab-view": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-tab-view",
            "react-native-vector-icons": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-vector-icons",
            "react-native-fast-image": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-fast-image",
            "react-native-screens": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-screens",
            "react-native-localize": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-localize",
            "react-native-reanimated": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-reanimated",
            "react-native-safe-area-context": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/react-native-safe-area-context",
            "@react-native-async-storage/async-storage": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-async-storage/async-storage",
            "@react-native-community/datetimepicker": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-community/datetimepicker",
            "@react-native-masked-view/masked-view": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-masked-view/masked-view",
            "eventemitter3": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/eventemitter3",
            "@react-native-picker/picker": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native-picker/picker",
            "deprecated-react-native-prop-types": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/deprecated-react-native-prop-types",
            "metro-file-map": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/metro-file-map",
            "@react-native/metro-config": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@react-native/metro-config",
            "@rollup/plugin-alias": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@rollup/plugin-alias",
            "mendix": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix",
            "mx-global": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mx-global",
            "mx-api": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api",
            "mx-api/data": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/data",
            "mx-api/session": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/session",
            "mx-api/ui": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/ui"
        }
    },
    cacheVersion: "68245",
};

module.exports = configUtils.mergeConfig(configUtils.getDefaultConfig(__dirname), metroConfig);
