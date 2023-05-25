const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/form.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "https://raamdeluxe.github.io/formtest/",
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
