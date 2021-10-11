/***
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
   请你将两个数相加，并以相同形式返回一个表示和的链表。
   你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/***
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   // 首先看给的ListNode的构造函数 val是值 next是下一个节点的地址
  // 其次注意 l1 与 l2的长度 不一定相等
  // 注意进位
  const newList = new ListNode(0);
  let p1 = l1; // 链表直接获取第一个点
  let p2 = l2;
  let cur = newList;
  let carry = 0; // 存储进位
  while(p1 || p2) {
      const v1 = p1 ? p1.val : 0;
      const v2 = p2 ? p2.val : 0;
      const val = v1 + v2 + carry;
      carry = Math.floor(val / 10);
      cur.next = new ListNode(val % 10);
      if(p1) p1 = p1.next
      if(p2) p2 = p2.next
      cur = cur.next;
  }
  // 遍历完后，如果还有进位，追加到最后
  if(carry) {
      cur.next = new ListNode(carry);
  }
  return newList.next;
};