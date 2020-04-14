/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let count = 1
  let node = head
  while (node.next !== null) {
    count++
    node = node.next
  }

  const middle = Math.floor(count / 2) + 1
  count = 1
  node = head
  while (count < middle) {
    count++
    node = node.next
  }

  return node
}
