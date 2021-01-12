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
  let carry = 0,
    sum,
    n1 = l1,
    n2 = l2,
    node,
    newNode,
    firstNode

  sum = n1.val + n2.val + carry
  firstNode = node = new ListNode(sum % 10)
  carry = sum >= 10 ? 1 : 0

  n1 = n1.next
  n2 = n2.next

  while (n1 || n2) {
    sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + carry

    newNode = new ListNode(sum % 10)
    node.next = newNode
    node = newNode
    carry = sum >= 10 ? 1 : 0

    n1 = n1 ? n1.next : null
    n2 = n2 ? n2.next : null
  }

  if (carry) {
    node.next = new ListNode(1)
  }

  return firstNode
}
