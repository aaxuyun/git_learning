var path=require('path');

module.exports = {
    "entry": __dirname + "/src/index.js",
    "output": {
        "path": "E:\\nginx-1.14.2\\TodoList\\entry",
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "loader": "babel-loader",
                "exclude": /node_modules/,
                "query": {
                    "presets": ["flow", "react", "env", "stage-0"]
                }
            },
            {
                "test": /\.css$/,
                "use": ["style-loader", "css-loader"]
            }
        ]
    },
    "devtool": "source-map"
}
