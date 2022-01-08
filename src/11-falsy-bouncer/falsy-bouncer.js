/**
 * Falsy bouncer
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
export function bouncer(arr) {
  const result = arr.filter((item) => !!item);

  return result;
}
