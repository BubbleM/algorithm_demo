function cal(n) {
    let sum_1 = 0;
    let p = 1;
    for (; p < 100; ++p) { // 这段代码循环执行了 100(已知的数都是常量级) 次，所以是一个常量的执行时间，跟 n 的规模无关。
        sum_1 = sum_1 + p; // c 不管常量的执行时间多大，我们都可以忽略掉。因为它本身对增长趋势并没有影响
    }

    let sum_2 = 0;
    let q = 1;
    for (; q < n; ++q) {
        sum_2 = sum_2 + q; // O(n) 
    }

    let sum_3 = 0;
    let i = 1;
    let j = 1;
    for (; i <= n; ++i) {
        j = 1;
        for (; j <= n; ++j) {
            sum_3=sum_3+ i*j; // O(n^2)
        }
    }

    return sum_1 + sum_2 + sum_3; 
}

/**
 * 这个代码分为三部分，分别是求 sum_1、sum_2、sum_3。
 * 我们可以分别分析每一部分的时间复杂度，然后把它们放到一块儿，再取一个量级最大的作为整段代码的复杂度。
 */