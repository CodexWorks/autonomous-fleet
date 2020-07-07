const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/auction_house', { target: 'http://localhost:8000' })
  );
};
