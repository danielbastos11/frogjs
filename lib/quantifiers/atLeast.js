import append     from './append';
import zeroOrMore from './zeroOrMore';
import oneOrMore  from './oneOrMore';

export default (n, ...args) => {
  if(n == 0) return zeroOrMore(...args);
  if(n == 1) return oneOrMore(...args);

  return append(`{${n},}`)(...args);
};
