import grouping from '../grouping';

describe('Grouping', () => {
  it('should accept a callback and use it', () => {
    let mock = jest.fn();

    grouping(mock)('a', 'b');
    expect(mock).toBeCalledWith('ab');
  });

  it('should resolve functions', () => {
    let mock = jest.fn();

    grouping(mock)('a', () => 'b');
    expect(mock).toBeCalledWith('ab');
  });
});
