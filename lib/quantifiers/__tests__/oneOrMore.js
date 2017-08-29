import oneOrMore from '../oneOrMore';

describe('One or More', () => {
  it('should generate appropriate string', () => {
    expect(oneOrMore('a')).toBe('a+');
    expect(oneOrMore('a', 'b')).toBe('(?:ab)+');
  });

  it('should match', () => {
    let regex = new RegExp(oneOrMore('a', 'b'));

    expect('ababab').toMatch(regex);
    expect('ab').toMatch(regex);
    expect('c').not.toMatch(regex);
  });
});
