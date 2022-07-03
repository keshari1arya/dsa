/*
    While using recursion
    don't think about how will it work for all. 
    take a senario in between and leave the funcion to do its job
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {
    if (root === null)
        return true;
    return helper(root.left, root.right);
};

var helper = function (left, right) {
    if (!left || !right)
        return left == right;
    if (left.val != right.val)
        return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
};