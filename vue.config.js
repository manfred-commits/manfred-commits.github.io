module.exports = {
	// publicPath: process.env.NODE_ENV === 'production'
    // ? '/manfred-commits.github.io/'
    // : '/',
    publicPath:'/',
	chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
