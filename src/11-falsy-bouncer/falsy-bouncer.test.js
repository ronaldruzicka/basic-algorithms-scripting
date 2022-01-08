import { bouncer } from './falsy-bouncer';

describe('Falsy bouncer', () => {
  it('should return [7, "ate", 9]', () => {
    expect(bouncer([7, 'ate', '', false, 9])).toMatchObject([7, 'ate', 9]);
  });

  it('should return ["a", "b", "c"]', () => {
    expect(bouncer(['a', 'b', 'c'])).toMatchObject(['a', 'b', 'c']);
  });

  it('should return []', () => {
    expect(bouncer([false, null, 0, NaN, undefined, ''])).toMatchObject([]);
  });

  it('should return [1, 2]', () => {
    expect(bouncer([null, NaN, 1, 2, undefined])).toMatchObject([1, 2]);
  });
});
