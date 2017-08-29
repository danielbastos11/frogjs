import enclose from '../enclose';

describe('Enclose', () => {
  it('should generate appropriate string', () => {
      expect(enclose('a')).toBe('(?:a)');
      expect(enclose('a', 'b')).toBe('(?:ab)');
  });

  it('should match', () => {
    let regex = new RegExp(enclose('a', 'b'));

    expect('ab').toMatch(regex);
  });
});
