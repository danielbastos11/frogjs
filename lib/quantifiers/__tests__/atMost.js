import atMost from '../atMost';

describe('At Most', () => {
  it('should generate appropriate string', () => {
    expect(atMost(3, 'a')).toBe('a{0,3}');
    expect(atMost(3, 'a', 'b')).toBe('(?:ab){0,3}');

    expect(atMost(1, 'a')).toBe('a?');
    expect(atMost(1, 'a', 'b')).toBe('(?:ab)?');
  });

  it('should match', () => {
    let regex = new RegExp(atMost(3, 'a', 'b'));

    expect('ababab').toMatch(regex);
    expect(regex.exec('abababab')[0]).toHaveLength(6);
  });
});
