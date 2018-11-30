/* eslint-disable import/no-extraneous-dependencies */
const ncp = require('ncp');

ncp.ncp('./dist', '../public/', (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('done!');
});
