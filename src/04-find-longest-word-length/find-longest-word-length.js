/**
 * Find the Longest Word in a String
 *
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */
export function findLongestWordLength(str) {
  const words = str.split(' ');
  const wordsLength = words.map((word) => word.length);
  const max = Math.max(...wordsLength);

  return max;
}
