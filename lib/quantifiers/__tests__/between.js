import between from '../between';

describe('Between', () => {
  it('should generate appropriate string', () => {
    expect(between(5, 7, 'a')).toBe('a{5,7}');
    expect(between(5, 7, 'a', 'b')).toBe('(?:ab){5,7}');
    expect(between(0, 1, 'a')).toBe('a?');
    expect(between(0, 1, 'a', 'b')).toBe('(?:ab)?');
  });

  it('should match', () => {
    let regex = new RegExp(between(2, 3, 'a', 'b'));

    expect('ababab').toMatch(regex);
    expect('ab').not.toMatch(regex);
  });
});
