import { chunkArrayInGroups } from './chunk-array-in-groups';

describe('Chunky Monkey', () => {
  it('should return [["a", "b"], ["c", "d"]]', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toMatchObject([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('should return [[0, 1, 2], [3, 4, 5]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toMatchObject([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it('should return [[0, 1], [2, 3], [4, 5]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toMatchObject([
      [0, 1],
      [2, 3],
      [4, 5],
    ]);
  });

  it('should return [[0, 1, 2, 3], [4, 5]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toMatchObject([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });

  it('should return [[0, 1, 2], [3, 4, 5], [6]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toMatchObject([[0, 1, 2], [3, 4, 5], [6]]);
  });

  it('should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toMatchObject([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8],
    ]);
  });

  it('should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toMatchObject([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8],
    ]);
  });
});
