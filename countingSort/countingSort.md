计数排序的核心在于将`输入的数据值转化为键`存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

以原数组每个元素的值作为新数组的下标，而对应小标的新数组元素的值作为出现的次数，相当于是通过下标进行排序。

- 是一种O(n)的排序算法，其思路是开一个长度为 maxValue-minValue+1 的数组，然后分配。扫描一遍原始数组，以当前值- minValue 作为下标，将该下标的计数器增1。收集。扫描一遍计数器数组，按顺序把值收集起来。

举个例子， nums=[2, 1, 3, 1, 5] , 首先扫描一遍获取最小值和最大值， maxValue=5 , minValue=1 ，于是开一个长度为5的计数器数组 counter ，
1. 分配。统计每个元素出现的频率，得到 counter=[2, 1, 1, 0, 1] ，例如 counter[0] 表示值 0+minValue=1 出现了2次。
2. 收集。 counter[0]=2 表示 1 出现了两次，那就向原始数组写入两个1， counter[1]=1 表示 2 出现了1次，那就向原始数组写入一个2，依次类推，最终原始数组变为 [1,1,2,3,5] ，排序好了。

计数排序本质上是一种特殊的桶排序，当桶的个数最大的时候，就是计数排序。

```javascript
let arr = [2, 1, 3, 7,1, 0];

function countingSort(arr, maxValue) {
    console.log('排序前：'+arr+'\n');
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    console.log('初始化bucket：'+bucket + ' bucket数组的长度为：'+bucket.length);
    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    console.log('初始化bucket结束：'+bucket+'\n');
  
    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    console.log('arr排序后：'+arr);
    console.log('排序后bucket：'+bucket);
    return arr;
}

countingSort(arr, 7);

/**
排序前：2,1,3,7,0

初始化bucket：,,,,,,, bucket数组的长度为：8
初始化bucket结束：1,1,1,1,,,,1

arr排序后：0,1,2,3,7
排序后bucket：0,0,0,0,,,,0
liumindeMacBook-Pro:countingSort liumin$ node countingSort.js 
排序前：2,1,3,7,1,0

初始化bucket：,,,,,,, bucket数组的长度为：8
初始化bucket结束：1,2,1,1,,,,1

arr排序后：0,1,1,2,3,7
排序后bucket：0,0,0,0,,,,0
*/
```