let arr = [56, 12, 80, 91, 20];

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    console.log('排序前：'+arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        let temp = arr[j];
        arr[j] = arr[index];
        arr[index] = temp;
        console.log('排序中!!调整：'+arr);
      }else{
        console.log('排序中!!不调整：'+arr);
      }
    }
    console.log('排序后：'+arr);
    console.log('-------------------');
    console.log(arr)
  }

  return arr;
}

console.log(selectSort(arr)) // [ 12, 20, 56, 80, 91 ]