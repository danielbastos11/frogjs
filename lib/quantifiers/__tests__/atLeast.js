import atLeast from '../atLeast';

describe('At Least', () => {
  it('should generate appropriate string', () => {
    expect(atLeast(3, 'a')).toBe('a{3,}');
    expect(atLeast(3, 'a', 'b')).toBe('(?:ab){3,}');

    expect(atLeast(0, 'a')).toBe('a*');
    expect(atLeast(0, 'a', 'b')).toBe('(?:ab)*');

    expect(atLeast(1, 'a')).toBe('a+');
    expect(atLeast(1, 'a', 'b')).toBe('(?:ab)+');
  });

  it('should match', () => {
    let regex = new RegExp(atLeast(3, 'a', 'b'));

    expect('ababab').toMatch(regex);
    expect('abab').not.toMatch(regex);
  });
});
