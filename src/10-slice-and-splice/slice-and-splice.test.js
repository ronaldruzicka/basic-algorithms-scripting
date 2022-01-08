import { frankenSplice } from './slice-and-splice';

describe('Slice and splice', () => {
  it('should return [4, 1, 2, 3, 5]', () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toMatchObject([4, 1, 2, 3, 5]);
  });

  it('should return ["a", 1, 2, "b"]', () => {
    expect(frankenSplice([1, 2], ['a', 'b'], 1)).toMatchObject(['a', 1, 2, 'b']);
  });

  it('should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]', () => {
    expect(
      frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2),
    ).toMatchObject(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
  });

  it('should return [1, 2, 3, 4]', () => {
    expect(frankenSplice([1, 2, 3, 4], [], 0)).toMatchObject([1, 2, 3, 4]);
  });

  it('should not mutate original arrays', () => {
    const first = [1, 2, 3];
    const second = [4, 5];

    frankenSplice(first, second, 1);
    expect(first).toMatchObject([1, 2, 3]);
    expect(second).toMatchObject([4, 5]);
  });
});
