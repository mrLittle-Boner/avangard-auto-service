module.exports = {
  chainWebpack: config => {
    config;
    config.plugin("html").tap(args => {
      args[0].inject = true;
      args[0].favicon = "./public/favicon.svg";

      return args;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}
