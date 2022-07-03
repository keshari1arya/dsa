/**
 * @param {number[]} cost
 * @return {number}
 */
/*
    It will be done when you cross all stairs.
    [10,15,20] in this case your reaching location would be 3
*/
var minCostClimbingStairs = function (cost) {
    let memo = new Array(cost.length).fill(-1);
    // return Math.min(climb(cost, cost.length - 1, memo), climb(cost, cost.length - 2, memo));
    return climbBottomUp(cost);
};


/*
    to reach 3 you either need to come via minimum 2 or 1
    and you can go forward only if you pay for current cost. so we added currect cost
 */
function climb(cost, n, memo) {
    if (n == 0 || n == 1)
        return cost[n];
    if (memo[n] >= 0)
        return memo[n];
    memo[n] = Math.min(climb(cost, n - 1, memo), climb(cost, n - 2, memo)) + cost[n];
    return memo[n];
}

/*
    Again Edge case would be target spot for which there will be no cost
    so in order to calculate just take the min for last 2 positions
 */
function climbBottomUp(cost) {
    let table = new Array(cost.length).fill(-1);
    table[0] = cost[0];
    table[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        table[i] = Math.min(table[i - 1], table[i - 2]) + cost[i];
    }

    return Math.min(table[cost.length - 1], table[cost.length - 2]);
}

function climbBottomUpConstantSpace(cost) {
    let prev2 = cost[0];
    let prev1 = cost[1];
    let curr = 0;
    for (let i = 2; i < cost.length; i++) {
        curr = Math.min(prev1, prev2) + cost[i];
        prev2 = prev1;
        prev1 = curr;
    }

    return Math.min(prev1, prev2);
}