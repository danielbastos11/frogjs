import grouping from '../grouping/grouping';
import enclose  from '../grouping/enclose';
import is       from '../grouping/is';

let symbols = ['*', '?', '+'];
let isQuantified = (s) => {
  let last = s.length - 1;

  return symbols.indexOf(s[last]) !== -1;
};

export default symbol => (...args) => {
  let fn = grouping(r => {
    let x;
    if(args.length > 1 || isQuantified(r)){
      x = enclose(r)
    } else {
      x = is(r);
    }

    return x + symbol;
  });

  return fn(...args);
};
