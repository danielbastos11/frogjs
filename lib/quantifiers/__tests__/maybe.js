import maybe      from '../maybe';
import oneOrMore  from '../oneOrMore';
import zeroOrMore from '../zeroOrMore';

describe('Maybe', () => {
  it('should generate appropriate string', () => {
    expect(maybe('a')).toBe('a?');
    expect(maybe('a', 'b')).toBe('(?:ab)?');
  });

  it('should avoid accidental lazy quantifiers', () => {
    expect(maybe(oneOrMore('a'))).toBe('(?:a+)?');
    expect(maybe(zeroOrMore('a'))).toBe('(?:a*)?');
    expect(maybe(maybe('a'))).toBe('(?:a?)?');
  });

  it('should match', () => {
    let regex = new RegExp(maybe('a', 'b'));

    expect('cab').toMatch(regex);
    expect('c').toMatch(regex);
  });
});
