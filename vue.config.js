module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-portofolio-basic/'
    : '/',
    
	chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
