/*
    if value is increasing by depth we need to add that increament
    no need to pass multiple elements.

    var minDepth = function(root) {
    if (!root) return 0
    var L = minDepth(root.left), R = minDepth(root.right)
    return 1 + (Math.min(L, R) || Math.max(L, R))
};
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    min = Infinity;
    if (!root)
        return 0;
    return helper(root, 1, min);
};

var helper = function (node, curr, min) {
    if (!node)
        return min;
    if (!node.left && !node.right) {
        return Math.min(curr, min);
    }
    return Math.min(helper(node.left, curr + 1, min), helper(node.right, curr + 1, min));
};