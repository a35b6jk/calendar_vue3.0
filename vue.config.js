module.exports = {
	devServer: {
		overlay: {
			warnings: false,
			errors: false
		},
		proxy: {
			"/api": {
				target: "http://v.juhe.cn/",
				changeOrigin: true,
				ws: true,
				secur: false,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
		
	},
	lintOnSave: false
}