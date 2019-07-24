let arr = [65, 27, 59, 64, 58];

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) { //从第2个元素开始插入       c1*n
    let temp = arr[i]; //待插入元素                                 c2(n-1)
    j = i - 1; //                                                 c3(n-1)
    while (j >= 0 && temp < arr[j]) { //从后向前，找到比其小的数的位置  c4  非稳定的while循环
        arr[j + 1] = arr[j]; //向后移动
        j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

insertSort(arr);