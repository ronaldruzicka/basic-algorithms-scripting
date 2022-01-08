/**
 * Truncate a string
 *
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a "..." ending.
 */
export function truncateString(str, num) {
  if (str.length > num) {
    const result = str.substr(0, num).concat('...');

    return result;
  }

  return str;
}
