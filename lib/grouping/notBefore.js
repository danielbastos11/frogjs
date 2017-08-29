import is    from './is';
import group from './group';

// IF 1 x
// x(?!y)
// IF MANY x
// (?:x)(?!y)
export default (ahead, ...args) => {
  let y = is(ahead);
  let x = group(...args);

  return x + `(?!${y})`;
};
