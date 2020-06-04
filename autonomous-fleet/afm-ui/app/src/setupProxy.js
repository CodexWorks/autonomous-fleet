const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/auction_house', { target: 'http://localhost:5001' }));
    app.use(createProxyMiddleware('/logistics_erp', { target: 'http://localhost:5000' }));
  };

