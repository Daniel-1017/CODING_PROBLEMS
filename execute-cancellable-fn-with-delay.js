/* 
Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20, cancelTime = 50
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancel = cancellable(fn, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, 50);

the cancelTime (50ms) is after the delay time (20ms), so fn(2) should be called at t=20ms. The value returned from fn is 10.
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
  const timeout = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeout);
};
