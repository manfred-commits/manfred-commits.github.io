module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/manfred-commits.github.io/'
    : '/',

	chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
