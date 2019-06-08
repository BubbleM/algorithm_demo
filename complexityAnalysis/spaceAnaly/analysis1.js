function prlet(n) {
    let i = 0; //我们申请了一个空间存储变量 i，但是它是 常量阶的，跟数据规模 n 没有关系，所以我们可以忽略
    let arr = new Array[n]; // 申请了一个大小为 n 的 int 类型数 组，除此之外，剩下的代码都没有占用更多的空间，所以整段代码的空间复杂度就是 O(n)。
    for(i; i < n; ++i){ 
        arr[i] = i * i;
    }
    for(i=n-1; i >= 0; --i){ 
        console.log(arr[i]);
    }
}