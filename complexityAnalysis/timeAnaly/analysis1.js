function cal(n){
    let sum = 0;   // c1
    let i = 1;  // c2
    for(; i <= n; ++i){  // c3(n)
        console.log(i);
        sum += i;  // c4(n)
    }
    return sum;
}
cal(3);
/**
 * T(n) = c1 + c2 + c3(n) + c4(n)
 *      = c1 + c2 + (c3+c4)n
 *      = c + an
 * 
 * 代码的执行时间 T(n) 与每行代码的执行次数成正比。  T(n) = O(an + c) ~= O(n)
 */