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
