import capture from '../capture';

describe('Capture', () => {
  it('should generate appropriate string', () => {
      expect(capture('a')).toBe('(a)');
      expect(capture('a', 'b')).toBe('(ab)');
  });

  it('should match', () => {
    let regex = new RegExp(capture('a', 'b'));

    expect('abcd'.match(regex)[1]).toBe('ab');
    expect('ab').toMatch(regex);
  });
});
