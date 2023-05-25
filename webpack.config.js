const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/form.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// add other rules for other file types here if needed
		],
	},
};
