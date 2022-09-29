module.exports = {
  mode: "development",

  entry: {
    bundle: path.resolve(__dirname, "./weatherfr/src/index.js"),
  },

  output: { path: path.resolve(__dirname, "./weatherfr/public") },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
