import { nodeResolve } from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@rollup/plugin-node-resolve/dist/cjs/index.js";
import commonjs from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@rollup/plugin-commonjs/dist/cjs/index.js";
import { babel } from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@rollup/plugin-babel/dist/cjs/index.js";
import clear from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/rollup-plugin-clear/dist/index.js";
import esbuild from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/rollup-plugin-esbuild/dist/index.mjs";
import postcss from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/rollup-plugin-postcss/dist/index.js";
import nodePolyfills from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/rollup-plugin-polyfill-node/dist/index.js";

import mendixCopy from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/rollup-plugin-mendix-copy.mjs";
import mendixResolve from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/rollup-plugin-mendix-resolve.mjs";
import mendixOnlyWriteChanged from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/rollup-plugin-mendix-only-write-changed.mjs";
import mendixServiceWorker from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/rollup-plugin-mendix-serviceworker.mjs";
import alias from "file:///Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@rollup/plugin-alias/dist/es/index.js";

const JAVASCRIPT_SOURCE_PATH_REGEX = /javascriptsource/;
const PLUGGABLE_WIDGETS_PATH_FILTER = "./widgets/**";

const isProduction = process.env.NODE_ENV === "production";
const shouldGenerateSourceMaps = process.env.SOURCE_MAP_GENERATION === "enabled";

export default {
    input: "index.js",
    watch: {
        clearScreen: false,
        buildDelay: 1000,
    },
    output: {
        dir: "dist",
        format: "es",
        chunkFileNames: isProduction ? "[hash].js" : "[name]-[hash].js",
        sourcemap: shouldGenerateSourceMaps,
        minifyInternalExports: isProduction,
        experimentalMinChunkSize: isProduction ? 4096 : 1,
    },
    treeshake: isProduction,
    plugins: [
        ignore(/react-native/),
        mendixResolve(
            "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/web-resolutions.json",
            "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules",
        ),
        nodePolyfills(),
        esbuild({
            sourceMap: shouldGenerateSourceMaps,
            exclude: [JAVASCRIPT_SOURCE_PATH_REGEX, PLUGGABLE_WIDGETS_PATH_FILTER],
            minify: isProduction,
            target: "ES2020",
            define: {
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            },
            loaders: {
                // Enable JSX in .js files too
                ".js": "jsx",
            },
        }),
        nodeResolve({
            modulePaths: ["/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules"],
        }),
        commonjs({
            transformMixedEsModules: true,
            exclude: [
                "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/**",
                PLUGGABLE_WIDGETS_PATH_FILTER,
            ],
        }),
        babel({
            babelHelpers: "bundled",
            include: JAVASCRIPT_SOURCE_PATH_REGEX,
            presets: [
                [
                    "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@babel/preset-env",
                    { targets: { safari: "13" } },
                ],
            ],
            plugins: [
                "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/@babel/plugin-syntax-dynamic-import",
            ],
        }),
        clear({
            targets: ["dist"],
        }),
        postcss({
            extract: "widgets.css",
            minimize: isProduction,
            sourcemap: shouldGenerateSourceMaps ? "inline" : false,
        }),
        mendixCopy({
            sources: [
                {
                    folder: "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment/web/widgets",
                    exclude: [".js", ".mjs", ".css"],
                    include: "**",
                },
            ],
        }),
        mendixServiceWorker({
            deploymentDir: "/Users/mireiotrinley/Desktop/ERP_Projekt/deployment",
        }),
        mendixOnlyWriteChanged(),
        alias({
            entries: {
                "mx-api": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api",
                "mx-api/data": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/data",
                "mx-api/session":
                    "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/session",
                "mx-api/ui": "/Applications/Studio Pro 10.22.0.68245-Beta.app/Contents/modeler/tools/node/node_modules/mendix/mx-api/ui",
            },
        }),
    ],
};

function ignore(regex) {
    const emptyFile = "export default {}";
    const emptyFileName = "\0rollup_plugin_ignore_empty_module_placeholder";

    return {
        name: "ignore",
        resolveId(importee) {
            return importee === emptyFileName || regex.test(importee) ? emptyFileName : null;
        },
        resolveDynamicImport(specifier) {
            if (typeof specifier === "string" && specifier === emptyFileName || regex.test(specifier)) {
                return emptyFileName;
            }
        },
        load(id) {
            return id === emptyFileName ? emptyFile : null;
        },
    };
}
