/* eslint-disable no-undef */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = l1;
  let b = l2;
  const dummy = new ListNode(0);
  let cursor = dummy;
  let flag = 0;
  while (a || b || flag) {
    const sum = (a?.val || 0) + (b?.val || 0) + flag;
    const rest = sum % 10;
    flag = Math.floor(sum / 10);
    cursor.next = new ListNode(rest);
    cursor = cursor.next;
    a = a?.next || undefined;
    b = b?.next || undefined;
  }
  return dummy.next;
};
// @lc code=end
