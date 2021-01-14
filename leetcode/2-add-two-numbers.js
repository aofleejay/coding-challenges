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

  firstNode = node = new ListNode()

  while (n1 || n2) {
    sum = 0

    if (n1) {
      sum += n1.val
      n1 = n1.next
    }

    if (n2) {
      sum += n2.val
      n2 = n2.next
    }

    node.next = new ListNode((sum + carry) % 10)
    node = node.next

    carry = sum + carry >= 10 ? 1 : 0
  }

  if (carry) {
    node.next = new ListNode(1)
  }

  return firstNode.next
}
