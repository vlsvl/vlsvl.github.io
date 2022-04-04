const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = {
  progress: require("webpackbar"),
  extractCSS: require("mini-css-extract-plugin"),
  html: require("html-webpack-plugin"),
  copy: require("copy-webpack-plugin"),
  clean: (() => {
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    return CleanWebpackPlugin;
  })(),
  sync: require("browser-sync-webpack-plugin"),
};

module.exports = (env = {}, argv) => {
  const isProduction = argv.mode === "production";

  let config = {
    context: path.resolve(__dirname, "src"),

    entry: {
      app: ["./scripts/index.js", "./styles/style.scss"],
    },

    output: {
      path: path.resolve(__dirname, "./docs"),
      filename: "assets/[name].bundle.js",
    },

    devServer: {
      historyApiFallback: true,
      // contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8088,
    },

    module: {
      rules: [
        // JavaScript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        // SCSS
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: plugins.extractCSS.loader,
              options: {
                publicPath: "../",
              },
            },
            // Creates 'style' nodes from JS strings
            // Warning!!! Style-loader conflicting with extractor not use both of this
            // "style-loader",
            // This loader resolves url() and @imports inside CSS
            "css-loader",
            {
              // Then we apply postCSS fixes like autoprefixer and minifying
              loader: "postcss-loader",
              options: {
                sourceMap: !isProduction,
                postcssOptions: {
                  ident: "postcss",
                  plugins: [
                    require("autoprefixer")(),
                    ...(isProduction
                      ? [
                          require("cssnano")({
                            preset: [
                              "default",
                              {
                                minifySelectors: false,
                              },
                            ],
                          }),
                        ]
                      : []),
                  ],
                },
              },
            },
            {
              // First we transform SASS to standard CSS
              loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: "expanded",
                  sourceMap: !isProduction,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: (() => {
      let common = [
        new plugins.extractCSS({
          filename: "styles/[name].css",
        }),
        new plugins.html({
          title: "Frontend Boilerplate",
          favicon: 'favicon.ico',
          template: 'html/index.html',
          filename: "index.html",
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
          },
          title: 'Test title'
        }),
        // new plugins.clean(),
        // new webpack.HotModuleReplacementPlugin(),
        new plugins.progress({
          color: "#5C95EE",
        }),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(
            isProduction ? "production" : "development"
          ),
        })
      ];

      const production = [
        new plugins.clean(),
        new plugins.copy({
          patterns: [
            {
              from: "favicon.ico", to: "dist"
            },
          ],
        }),
      ];

      const development = [
        new plugins.sync(
          {
            host: "localhost",
            port: 9099,
            proxy: "http://localhost:8088",
          },
          {
            reload: false,
          }
        ),
      ];

      return isProduction
        ? common.concat(production)
        : common.concat(development);
    })(),
  };

  return config;
};
