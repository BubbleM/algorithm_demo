桶排序 (箱排序)的原理是将待排序序列分到有限数量的桶里面，然后对每个桶再分别排序（可以使用其它的排序算法或者是递归使用桶排序算法），最后将各个桶中的数据有序的合并起来成为一个整体有序的序列。排序过程：1.假设待排序的一组数统一的分布在一个范围中，并将这一范围划分成几个子范围，也就是桶2.将待排序的一组数，分档规入这些子桶，并将桶中的数据进行排序3.将各个桶中的数据有序的合并起来
实例分析
设有数组 array = [29, 25, 3, 49, 9, 37, 21, 43]，那么数组中最大数为 49，先设置 5 个桶，那么每个桶可存放数的范围为：09、1019、2029、3039、40~49，然后分别将这些数放人自己所属的桶，如下图：
![](//upload-images.jianshu.io/upload_images/5766843-6c37b16ddad5cc6c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后，分别对每个桶里面的数进行排序，或者在将数放入桶的同时用插入排序进行排序。最后，将各个桶中的数据有序的合并起来，如下图：
![](//upload-images.jianshu.io/upload_images/5766843-a53478d0f2e346e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```javascript
/**
 * 
 * @param {*} arr 待排序数组
 * @param {*} bucketCount 桶的个数
 */
function bucketSort(arr, bucketCount) {
    console.log('排序前：'+arr);
    if (arr.length <= 1) {
      return arr; //长度小于等于1不用排序
    }
    var buckets, //装桶的桶，下标控制桶的编号
        result = [],
        minValue = arr[0],
        maxValue = arr[0];
   
    //获取数组中的最大值和最小值
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];  // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i]; // 输入数据的最大值
      }
    }

    //桶的初始化
    bucketCount = parseInt(bucketCount) > 0 ? parseInt(bucketCount) : 10; //默认桶的个数为10
    var bucketRange = (maxValue - minValue) / bucketCount; //每个桶的范围
    buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor((arr[i] - minValue) / bucketRange);
        if(buckets[index]){
            buckets[index].push(arr[i]);
        }else{
            buckets[index] = []; //没有值则生成新的桶，并把值放到对应桶中
            buckets[index][0] = arr[i];
        }
    }

    // 对每个桶进行排序，这里使用了插入排序
    for (let i = 0; i < buckets.length; i++) {
        insertSort(buckets[i]);
    }
    console.log('插入各个桶之后的情况：');
    console.log(buckets);
    console.log('========================');

    //合并桶输出结果
    for (let j = 0; j < buckets.length; j++) {
        result = result.concat(buckets[j]);
    }

    console.log('排序结果：'+result);
    return arr;
}

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) { // 从第2个元素开始插入
      let temp = arr[i];　// 待插入元素
      j = i - 1;
      while (j >= 0 && temp < arr[j]) { // 从后向前，找到比其小的数的位置
          arr[j + 1] = arr[j]; // 向后移动
          j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
}

var arr = [9,3,4,0,2,8,5,1,7,6,11,10,18,15,17,12,16,13,19,14];
bucketSort(arr, 10);

/**
排序前：9,3,4,0,2,8,5,1,7,6,11,10,18,15,17,12,16,13,19,14
插入各个桶之后的情况：
[ [ 0, 1 ],
  [ 2, 3 ],
  [ 4, 5 ],
  [ 6, 7 ],
  [ 8, 9 ],
  [ 10, 11 ],
  [ 12, 13 ],
  [ 14, 15 ],
  [ 16, 17 ],
  [ 18 ],
  [ 19 ] ]
========================
排序结果：0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
*/
```