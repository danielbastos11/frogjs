import append from './append';
import maybe  from './maybe';

export default (min, max, ...data) => {
  if(min == 0 && max == 1) return maybe(...data);

  return append(`{${min},${max}}`)(...data);
};
