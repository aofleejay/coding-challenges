function threeSumClosest(nums: number[], target: number): number {
  let diff = Infinity, lo, hi, sum
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    lo = i + 1, hi = nums.length - 1

    while (lo < hi) {
      sum = nums[i] + nums[lo] + nums[hi]
      if (target - sum === 0) return sum
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum
      }

      sum < target ? lo++ : hi--
    }
  }

  return target - diff
};