/**
 * https://leetcode.com/problems/validate-binary-search-tree/

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
* this.val = (val===undefined ? 0 : val)
* this.left = (left===undefined ? null : left)
* this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let last = -Infinity;
let ans = true;
function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  // console.log(node.data);
  if (root.val <= last) {
    ans = false;
    last = root.val;
  } else if (ans != false) {
    last = root.val;
  }
  inorder(root.right);
}
var isValidBST = function (root) {
  inorder(root);
  let result = ans;
  last = -Infinity;
  ans = true;
  return result;
};
