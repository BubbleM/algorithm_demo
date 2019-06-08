let arr = [56, 12, 80, 91, 20];

function mergeSort(arr) { // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    console.log('从 '+middle+' 位置开始切割原数据'+arr);
    console.log('切割后序列1：'+left);
    console.log('切割后序列2：'+right);
    console.log(' ');
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    console.log('开始执行merge操作：left：'+left+'right：'+right);
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    console.log('执行中：'+result);
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.log('本次执行结果：'+result);
    return result;
}

console.log('---------------最终结果：'+mergeSort(arr));