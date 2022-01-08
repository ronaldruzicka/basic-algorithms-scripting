/**
 * Repeat a string
 *
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 * For the purpose of this challenge, do not use the built-in .repeat() method.
 */
export function repeatStringNumTimes(str, num, result = '') {
  if (result === '' && num <= 0) {
    return '';
  }

  if (num === 0 && result !== '') {
    return result;
  }

  return repeatStringNumTimes(str, num - 1, result.concat(str));
}
