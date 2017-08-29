import notBefore from '../notBefore';

describe('Not Before', () => {
  it('should generate appropriate string', () => {
    expect(notBefore('a', 'b')).toBe('b(?!a)');
    expect(notBefore('a', 'b', 'c')).toBe('(?:bc)(?!a)');
  });

  it('should match', () => {
    let regex = new RegExp(notBefore('a', 'b', 'c'));

    expect('bc').toMatch(regex);
    expect('bca').not.toMatch(regex);
  });
});
