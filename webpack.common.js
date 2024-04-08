const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")
const dotenv = require("dotenv")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

dotenv.config()

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              parser: {
                syntax: "typescript"
              }
            }
          }
        }
      },
      {
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer]
              }
            }
          }
        ],
        test: /\.(css|scss)$/i
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: "file-loader"
      },
      {
        test: /\.geojson$/,
        type: "json"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/"),
      "@configs": path.resolve(__dirname, "src/configs/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@modals": path.resolve(__dirname, "src/modals/"),
      "@views": path.resolve(__dirname, "src/views/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@validation-schema": path.resolve(__dirname, "src/validationSchema/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: "src/assets/images/favicon.svg"
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve("src/assets/images"),
          to: path.resolve("build/assets/images")
        }
      ]
    })
  ]
}
