/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, m + n)

  let i = 0
  let j = 0
  while (i < m + n) {
    if (nums1[j] === undefined) {
      nums1.splice(j, 0, nums2.splice(0, 1)[0])
    } else if (nums1[j] > nums2[0]) {
      nums1.splice(j, 0, nums2.splice(0, 1)[0])
    }

    j++
    i++
  }
}
