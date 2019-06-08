function cal(n){
    let sum = 0;   // c1
    let i = 1; // c2
    let j = 1;  // c3
    for(; i <= n; ++i){  // c4(n)
        j = 1; // c5(n)
        for(; j <= n; ++j){ // c6(n^2)
            sum += j * j; // c7(n^2)
        }
    }
    return sum;
}
cal(3);
/**
 * T(n) = c1 + c2 + c3 + c4(n) + c5(n) + c6(n^2) + c7(n^2)
 *      = c1 + c2 + (c3+c4)n + (c6+c7)(n^2)
 *      = c + an + b(n^2)
 * 
 * 所有代码的执行时间 T(n) 与每行代码的执行次数 n 成正比。 T(n) = O(c + an + b(n^2)) ~= O(n^2)
 */