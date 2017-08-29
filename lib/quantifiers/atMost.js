import maybe   from './zeroOrMore';
import between from './between';

export default (n, ...args) => {
  return between(0, n, ...args);
};
