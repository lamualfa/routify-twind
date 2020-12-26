const fs = require('fs');
const twindSsr = require('../twind-ssr');

const script = fs.readFileSync(
  require.resolve('../../dist/build/bundle.js'),
  'utf8'
);
const template = fs.readFileSync(
  require.resolve('../../dist/__app.html'),
  'utf8'
);

module.exports = async (req, res) => {
  res.send(
    (await twindSsr(template, script, req.url)) + '\n<!--ssr rendered-->'
  );
};
