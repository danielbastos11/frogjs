import exactly from '../exactly';

describe('Exactly', () => {
  it('should generate appropriate string', () => {
    expect(exactly(3, 'a')).toBe('a{3}');
    expect(exactly(3, 'a', 'b')).toBe('(?:ab){3}');

    expect(exactly(1, 'a')).toBe('a');
    expect(exactly(1, 'a', 'b')).toBe('ab');
  });

  it('should match', () => {
    let regex = new RegExp(exactly(3, 'a', 'b'));

    expect('ababab').toMatch(regex);
    expect('abab').not.toMatch(regex);
  });
});
