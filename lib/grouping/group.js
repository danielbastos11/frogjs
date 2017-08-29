import grouping from './grouping';

export default (...args) => {
  let fn = grouping(r => args.length <= 1 ? r : `(?:${r})`);
  return fn(...args);
};
