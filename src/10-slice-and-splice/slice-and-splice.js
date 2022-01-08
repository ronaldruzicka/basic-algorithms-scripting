/**
 * Slice and splice
 *
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */
export function frankenSplice(arr1, arr2, n) {
  const head = arr2.slice(0, n);
  const tail = arr2.slice(n, arr2.length);
  const result = [...head, ...arr1, ...tail];

  return result;
}
