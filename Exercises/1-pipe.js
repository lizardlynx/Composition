'use strict';

const pipe = (...fns) => {
  for (const func of fns) {
    if (typeof func !== 'function') throw new Error('should be function');
  }
  return x => fns.reduce((curVal, f) => f(curVal), x);
};

module.exports = { pipe };
