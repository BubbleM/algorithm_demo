let arr = [65, 27, 59, 64, 58];

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) { // 从第2个元素开始插入
    console.log('排序前：'+arr);
    let temp = arr[i];　// 待插入元素
    j = i - 1;
    while (j >= 0 && temp < arr[j]) { // 从后向前，找到比其小的数的位置
        arr[j + 1] = arr[j]; // 向后移动
        console.log('排序中!!调整：'+arr);
        j--;
    }
    console.log('需在位置'+(j+1)+'插入元素.....'+temp)
    arr[j + 1] = temp;
    console.log('排序后：'+arr);
    console.log('-------------------');
  }
  console.log('最终结果:'+arr);
  return arr;
}

insertSort(arr);