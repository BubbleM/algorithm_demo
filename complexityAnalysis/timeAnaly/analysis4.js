function cal(n){
    let ret = 0;
    let i = 0;
    for(; i < n; i++){ 
        ret += fun(i);  // 假设 fun() 只是一个普通的操作，该行代码时间复杂度就是，T1(n) = O(n)。
    }                   // 但 fun() 函数本身不是一个简单的操作，它的时间复杂度是 T2(n) = O(n)，
                        // 所以，整个 cal() 函数 的时间复杂度就是，T(n) = T1(n) * T2(n) = O(n*n) = O(n2)。
    return ret;
}

function fun(n){
    let sum = 0;
    let i = 1;
    for(; i < n; i++){
        sum += i;
    }

    return sum;
}