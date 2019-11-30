'use strict';

const compose = (...fns) => {
  const events = {};
  const func = x => fns.reverse().reduce((acc, f) => {
    try {
      if (typeof acc !== 'number') return undefined;
      return f(acc);
    } catch (e) {
      const err = events['error'];
      if (err) err(e);
      return undefined;
    }
  }, x);
  func.on = (event, callback) => {
    events[event] = callback;
  };
  return func;
};

module.exports = { compose };
