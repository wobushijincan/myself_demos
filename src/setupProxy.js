const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/amp_sc', { target: 'http://192.168.50.29:10000' }))
}
