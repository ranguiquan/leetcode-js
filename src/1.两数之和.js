/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const left = map.get(target - nums[i]);
    if (left !== undefined) return [left, i];
    map.set(nums[i], i);
  }
  return [];
};
// @lc code=end
