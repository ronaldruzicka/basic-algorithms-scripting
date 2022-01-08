/**
 * Title case a sentence
 *
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */
export function titleCase(str) {
  const words = str.split(' ');
  const titled = words.map((word) =>
    `${word[0]}`.toUpperCase().concat(word.substr(1).toLowerCase()),
  );

  return titled.join(' ');
}
