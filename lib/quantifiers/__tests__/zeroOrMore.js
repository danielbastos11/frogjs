import zeroOrMore from '../zeroOrMore';

describe('Zero or More', () => {
  it('should generate appropriate string', () => {
    expect(zeroOrMore('a')).toBe('a*');
    expect(zeroOrMore('a', 'b')).toBe('(?:ab)*');
  });

  it('should match', () => {
    let regex = new RegExp(zeroOrMore('a', 'b'));

    expect('ababab').toMatch(regex);
    expect('c').toMatch(regex);
  });
});
