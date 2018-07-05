const utils = require('./utils');
const expect = require('expect');
// 'describe' will group individual tests into sections so it's easy 
// to group and scan tests.
// You can use 'describe' inside 'describe'.
describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 22);
    expect(res).toBe(55);
    // if (res !== 55) throw new Error(`Expected 55, but got ${res}`);

  });
});

