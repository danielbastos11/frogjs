import append from './append';
import is     from '../grouping/is';

export default (n, ...args) => {
  if(n == 1) return is(...args);

  return append(`{${n}}`)(...args);
};
