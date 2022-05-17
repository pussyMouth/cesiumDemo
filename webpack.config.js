const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        // needed to compile mutiline strings in Cesium
        sourcePrefix: "",
    },
    amd: {
        // enable webpack-friendly use of require in Cesium
        toUrlUndefined: true,
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    resolve: {
        alias: {
            // Cesium module name
            cesium: path.resolve(__dirname, cesiumSource),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ["url-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        // copy Cesium Assets,Widgets,and Workers to a static directory
        new CopyWebpackPlugin({
            patterns:[{
                from: path.join(cesiumSource, cesiumWorkers),
                to: "Workers",
            }
        ]}),
        new CopyWebpackPlugin({
            patterns:[{
                from: path.join(cesiumSource, "Assets"),
                to: "Assets",
            },
        ]}),
        new CopyWebpackPlugin({
            patterns:[{
                from: path.join(cesiumSource, "Widgets"),
                to: "Widgets",
            },
        ]}),
        new webpack.DefinePlugin({
            // define relative base path in cesium fro loading assets
            CESIUM_BASE_URL: JSON.stringify(""),
        }),
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        static: path.join(__dirname, "dist"),
    },
};