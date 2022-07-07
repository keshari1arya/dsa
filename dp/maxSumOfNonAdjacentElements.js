var rob = function (nums) {
    function solveRec(arr, n, dp) {
        if (dp[n] || dp[n] == 0)
            return dp[n];
        if (n < 0)
            return 0;
        if (n === 0)
            return arr[n];
        let incl = solve(arr, n - 2, dp) + arr[n];
        let excl = solve(arr, n - 1, dp);
        dp[n] = Math.max(incl, excl);
        return dp[n];
    }

    function solveBottomUp(arr, n, dp) {
        dp[0] = arr[0];
        dp[1] = Math.max(arr[1], arr[0]);

        for (let i = 2; i < n; i++) {
            let incl = dp[i - 2] + arr[i];
            let excl = dp[i - 1];
            dp[i] = Math.max(incl, excl);
        }
        return dp[n - 1];
    }

    function solveBottomUpSpaceOpt(arr) {
        let last = arr[0];
        let prev = Math.max(arr[1], arr[0]);

        for (let i = 2; i < arr.length; i++) {
            let incl = last + arr[i];
            let excl = prev;
            let curr = Math.max(incl, excl);
            last = prev;
            prev = curr;
        }
        return prev;
    }
    return solveBottomUpSpaceOpt(nums);
    //return solveRec(nums, nums.length - 1, []);
};


/*
    JS returns NAN or undefind in case of index out of range
    Take care of current element while in DP
*/