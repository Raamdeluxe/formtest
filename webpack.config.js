const path = require("path");

module.exports = {
	mode: "development",
	entry: "index.html", // Assuming your main JavaScript file is named 'index.js' and is located in the 'src' directory.
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
