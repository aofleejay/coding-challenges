/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const num1Length = nums1.length
  const num2Length = nums2.length
  const middleIndex = Math.floor((num1Length + num2Length) / 2) + 1
  const temp = []

  let i = 0
  while (i < middleIndex) {
    if (nums1[0] < nums2[0]) {
      temp.push(nums1.shift())
    } else {
      if (nums2.length === 0) {
        temp.push(nums1.shift())
      } else {
        temp.push(nums2.shift())
      }
    }

    i++
  }

  if ((num1Length + num2Length) % 2 === 0) {
    return (temp[middleIndex - 1] + temp[middleIndex - 2]) / 2
  } else {
    return temp[middleIndex - 1]
  }
}
