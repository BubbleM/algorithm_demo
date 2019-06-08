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