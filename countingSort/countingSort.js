let arr = [2, 1, 3, 7, 1, 0];

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