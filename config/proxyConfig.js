module.exports = {
    proxyList: {
        '/api': {
            target: 'http://192.168.1.154:8822/',
            changeOrigin: true,
            pathRewrite: {

            }
        }
    }
}