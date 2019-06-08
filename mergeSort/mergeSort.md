归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。

和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

归并排序的算法步骤：
1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤 3 直到某一指针达到序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

```javascript
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

/**
从 2 位置开始切割原数据56,12,80,91,20
切割后序列1：56,12
切割后序列2：80,91,20
 
从 1 位置开始切割原数据56,12
切割后序列1：56
切割后序列2：12
 
开始执行merge操作：left：56right：12
执行中：12
本次执行结果：12,56
从 1 位置开始切割原数据80,91,20
切割后序列1：80
切割后序列2：91,20
 
从 1 位置开始切割原数据91,20
切割后序列1：91
切割后序列2：20
 
开始执行merge操作：left：91right：20
执行中：20
本次执行结果：20,91
开始执行merge操作：left：80right：20,91
执行中：20,80
本次执行结果：20,80,91
开始执行merge操作：left：12,56right：20,80,91
执行中：12,20,56
本次执行结果：12,20,56,80,91
---------------最终结果：12,20,56,80,91
*/
```