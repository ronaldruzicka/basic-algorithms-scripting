import { getIndexToIns } from './where-do-i-belong';

describe('Where do I belong', () => {
  it('should return a number', () => {
    expect(typeof getIndexToIns([10, 20, 30, 40, 50], 35)).toBe('number');
  });

  it('should return 3', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  it('should return 2', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
  });

  it('should return 1', () => {
    expect(getIndexToIns([40, 60], 50)).toBe(1);
  });

  it('should return 0', () => {
    expect(getIndexToIns([3, 10, 5], 3)).toBe(0);
  });

  it('should return 2', () => {
    expect(getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
  });

  it('should return 2', () => {
    expect(getIndexToIns([2, 20, 10], 19)).toBe(2);
  });

  it('should return 3', () => {
    expect(getIndexToIns([2, 5, 10], 15)).toBe(3);
  });

  it('should return 0', () => {
    expect(getIndexToIns([], 1)).toBe(0);
  });
});
