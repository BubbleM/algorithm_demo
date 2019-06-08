快速排序采用分治法进行排序，首先是分割，选取数组中的任意一个元素value(默认选择第一个)，将数组划分为两段，前一段小于value，后一段大于value；然后再分别对前一段和后半段进行递归快速排序。

细节如下图所示：
![](http://upload-images.jianshu.io/upload_images/3188930-f8f7d41bf79427a8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

平均时间复杂度：O(nlog2n)
空间复杂度：O(n) 
稳定性：不稳定

```javascript
let arr = [54, 63, 59, 62, 23];

function quickSort(sort_data) {
  if (sort_data.length === 0) return [];
  console.log('排序前：'+sort_data);
  let left_data = [];
  let right_data = [];
  let start_data = sort_data[0];

  for (let i = 1; i < sort_data.length; i++) {
    if (sort_data[i] < start_data) {
      left_data.push(sort_data[i]);
    } else {
      right_data.push(sort_data[i]);
    }
  }
  let result = quickSort(left_data).concat(start_data, quickSort(right_data));
  console.log('本次排序结果：'+result);
  return result;
//   return quickSort(left_data).concat(start_data, quickSort(right_data));
}

quickSort(arr); // [ 23, 54, 59, 62, 63 ]

/**
排序前：54,63,59,62,23
排序前：23
本次排序结果：23
排序前：63,59,62
排序前：59,62
排序前：62
本次排序结果：62
本次排序结果：59,62
本次排序结果：59,62,63
本次排序结果：23,54,59,62,63
*/
```

