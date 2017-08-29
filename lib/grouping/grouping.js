const isFunction = (f) => typeof f === 'function';

export default cb => (...args) => {
  let x = args.reduce((acc, a) => {
    if(isFunction(a)){
      return acc + a();
    }

    return acc + a;
  }, '');

  return cb(x);
};
