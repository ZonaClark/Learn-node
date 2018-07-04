const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 22);

  if (res !== 55) throw new Error(`Expected 55, but got ${res}`);
});