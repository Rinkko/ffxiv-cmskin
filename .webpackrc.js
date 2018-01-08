import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : {
		index : './src/index.js',
		vendor: './src/vendor.js'
	},
	publicPath         : '/',
	disableCSSModules  : false,
	ignoreMomentLocale : true,
	hash               : true,
	sass               : {
		includePaths: ['node_modules', 'src/style']
	},
	theme              : 'src/style/theme.js',
	html               : {
		'template': './src/index.ejs'
	},
	define             : {
		'$dirname': __dirname,
		'$isDev'  : process.env.NODE_ENV === 'development'
	},
	extraPostCSSPlugins: [
		pxtorem({
			        rootValue    : 16,
			        propWhiteList: []
		        })
	],
	extraBabelPlugins  : [
		'transform-decorators-legacy',
		'lodash',
		['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
	],
	browserslist       : ['iOS >= 8', 'Android >= 4'],
	env                : {
		development: {
			extraBabelPlugins: ['dva-hmr']
		},
		production : {
			commons            : [
				{
					name     : 'common',
					chunks   : [
						'index',
						'vendor'
					],
					filename : 'common.[chunkhash].js',
					minChunks: 2
				},
				{
					async    : 'common',
					children : true,
					minChunks: 2
				}
			],
			extraPostCSSPlugins: [
				cssnano(
					{safe: true},
					{preset: ['default', {discardComments: {removeAll: true}}]})
			]
		}
	}
};
