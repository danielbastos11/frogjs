import lazy       from '../lazy';
import zeroOrMore from '../zeroOrMore';

describe('Lazy', () => {
  it('should generate appropriate string', () => {
    expect(lazy(zeroOrMore('a'))).toBe('a*?')
  });
});
