/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * @param {TreeNode} root
 * @return {{ result: number, depth: number }}
 */
const dfs = (node) => {
  if (node === null) {
    return { result: 0, depth: 0 }
  } else {
    const left = dfs(node.left)
    const right = dfs(node.right)
    const result = Math.max(left.result, right.result, left.depth + right.depth)

    return { result, depth: Math.max(left.depth, right.depth) + 1 }
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  return dfs(root).result
}
