/*
    when you think about subproblem consider 
    what is getting calculated for current position while depending on last solution

    Here we need to add 1 because when we are taking minimum from its children,
    by this time we have already taken current coin.
 */

var coinChange = function (coins, amount) {
    // let dp = [];
    // for (let j = 1; j <= amount; j++) {
    //     dp[j] = Infinity;
    // }

    // dp[0] = 0;
    // for (let i = 0; i < coins.length; i++) {
    //     for (let j = 1; j <= amount; j++) {
    //         if (j >= coins[i]) {
    //             dp[j] = Math.min(1 + dp[j - coins[i]], dp[j]);
    //         }
    //     }
    // }
    // return dp[amount] == Infinity ? -1 : dp[amount];
    let dp = [];
    let ans = minCoin(coins, amount, dp)
    return ans === Infinity ? -1 : ans;
};


function minCoin(coins, amount, dp) {
    if (amount === 0)
        return 0;
    if (amount < 0)
        return Infinity;

    if (dp[amount])
        return dp[amount];
    let min = Infinity;
    for (let coin of coins) {
        let ans = 1 + minCoin(coins, amount - coin, dp);
        min = Math.min(ans, min);
        dp[amount] = min;
    }
    return min;
}


function minCoin(coins, amount) {
    if (amount === 0)
        return 0;
    if (amount < 0)
        return Infinity;
    let min = Infinity;
    for (let coin of coins) {
        let ans = 1 + minCoin(coins, amount - coin);
        min = Math.min(ans, min);
    }
    return min;
}