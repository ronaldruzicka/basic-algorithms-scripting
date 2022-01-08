/**
 * Chunky Monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
export const chunkArrayInGroups = (arr, size) => {
  const result = arr.reduce((acc, item, index) => {
    if (index % size === 0) {
      return [...acc, [item]];
    }

    return acc.map((nestedArr) => (nestedArr.length === size ? nestedArr : [...nestedArr, item]));
  }, []);

  return result;
};
