import before from '../before';

describe('Before', () => {
  it('should generate appropriate string', () => {
    expect(before('a', 'b')).toBe('b(?=a)');
    expect(before('a', 'b', 'c')).toBe('(?:bc)(?=a)');
  });

  it('should match', () => {
    let regex = new RegExp(before('a', 'b', 'c'));

    expect('bca').toMatch(regex);
    expect('bc').not.toMatch(regex);
  });
});
