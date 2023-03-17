/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// MY SOLUTION
const findMedianSortedArrays = function (nums1, nums2) {
  const mergedAndSortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedAndSortedArray.length % 2 === 1) {
    return mergedAndSortedArray[Math.floor(mergedAndSortedArray.length / 2)];
  } else {
    const middleDataPoint1 =
      mergedAndSortedArray[Math.floor(mergedAndSortedArray.length / 2)];
    const middleDataPoint2 =
      mergedAndSortedArray[Math.floor(mergedAndSortedArray.length / 2) - 1];
    return (middleDataPoint1 + middleDataPoint2) / 2;
  }
};

// SOLUTION OF OTHERS
function findMedianSortedArrays(nums1, nums2) {
  const mergeArray = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergeArray.length % 2 === 0) {
    const specificPlace = Math.floor(mergeArray.length / 2);
    const median =
      (mergeArray[specificPlace - 1] + mergeArray[specificPlace]) / 2;
    return median;
  } else {
    const median = Math.floor(mergeArray.length / 2);
    return mergeArray[median];
  }
}
