module.exports = {
	// useConfigFile: false,
	// ident: 'postcss',
	// sourceMap: false,
	plugins: [
		require('postcss-import')(),
		require('postcss-apply')(),
		require('lost'),
		require('postcss-cssnext')({
			browsers: [
				"android > 2",
				"ios >= 5",
				"and_ff > 30",
				"and_chr > 10"
			]
		})
	]
};