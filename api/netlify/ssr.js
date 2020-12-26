const { script, template } = require('./bundle.json');
const twindSsr = require('../twind-ssr');

exports.handler = async (event) => {
  const qs = Object.entries(event.queryStringParameters)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return {
    statusCode: 200,
    body:
      (await twindSsr(template, script, `${event.path}?${qs}`)) +
      '\n<!--ssr rendered-->',
  };
};
