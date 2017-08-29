import is from '../is';

describe('Is', () => {
  it('should generate appropriate string', () => {
      expect(is('a')).toBe('a');
      expect(is('a', 'b')).toBe('ab');
  });

  it('should match', () => {
    let regex = new RegExp(is('a', 'b'));

    expect('ab').toMatch(regex);
  });
});
