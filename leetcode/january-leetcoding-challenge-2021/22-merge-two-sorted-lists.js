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
var mergeTwoLists = function (l1, l2) {
  let head = (node = new ListNode())
  let n1 = l1,
    n2 = l2

  while (n1 || n2) {
    if (!n1) {
      node.next = n2
      n2 = n2.next
    } else if (!n2) {
      node.next = n1
      n1 = n1.next
    } else {
      if (n1.val < n2.val) {
        node.next = n1
        n1 = n1.next
      } else {
        node.next = n2
        n2 = n2.next
      }
    }
    node = node.next
  }

  return head.next
}
