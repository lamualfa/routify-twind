const { setup } = require('twind');
const { asyncVirtualSheet, getStyleTag } = require('twind/server');
const tailwindConfig = require('../tailwind.config');
const { tossr } = require('tossr');

const sheet = asyncVirtualSheet();
setup({ ...tailwindConfig, sheet });

module.exports = async function twindSsr(template, script, url, options) {
  sheet.reset();
  const html = await tossr(template, script, url, options);
  return html.replace('</head>', `${getStyleTag(sheet)}</head>`);
};
