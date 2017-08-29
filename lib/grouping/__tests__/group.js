import group from '../group';

describe('Group', () => {
  it('should generate appropriate string', () => {
      expect(group('a')).toBe('a');
      expect(group('a', 'b')).toBe('(?:ab)');
  });

  it('should match', () => {
    let regex = new RegExp(group('a', 'b'));

    expect('ab').toMatch(regex);
  });
});
