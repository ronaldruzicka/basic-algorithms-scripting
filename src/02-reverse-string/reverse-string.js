/**
 * Reverse a String
 *
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */
export function reverseString(str) {
  // With "array.reverse"
  // const result = [...str].reverse().join('');

  // Custom solution with "reduce"
  const arr = [...str];
  const arrLength = arr.length - 1;
  const result = arr.reduce((acc, item, index) => [...acc, arr[arrLength - index]], []).join('');

  return result;
}

export function reverseStringRecursion(str) {
  const isEmpty = str === '';

  if (isEmpty) {
    return '';
  }

  const head = str.charAt(0);
  const rest = str.substr(1);

  return `${reverseString(rest)}${head}`;
}
