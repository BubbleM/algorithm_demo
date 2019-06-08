堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

- 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
- 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；

堆排序的平均时间复杂度为 Ο(nlogn)。

```javascript
let arr = [54, 63, 59, 62, 23];

var len;  // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) { // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) { // 堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    console.log('排序前：'+arr);
    buildMaxHeap(arr);
    console.log('建立大顶堆：'+arr);
    console.log(' ');
    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
        console.log('遍历堆获取数据'+arr);
    }
    console.log('-------------------');
    console.log('最终结果:'+arr);
    return arr;
}

heapSort(arr);

/**
排序前：54,63,59,62,23
建立大顶堆：63,62,59,54,23
 
遍历堆获取数据62,54,59,23,63
遍历堆获取数据59,54,23,62,63
遍历堆获取数据54,23,59,62,63
遍历堆获取数据23,54,59,62,63
-------------------
最终结果:23,54,59,62,63
*/
```