let arr = [56, 12, 80, 91, 20];

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
、    console.log('排序前：'+arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        console.log('排序中!!调整：'+arr);
      }else{
        console.log('排序中!!不调整：'+arr);
      }
    }
    console.log('排序后：'+arr);
    console.log('-------------------');
  }
  console.log('最终结果:'+arr);
  return arr;
}
selectSort(arr);
// console.log(selectSort(arr)) // [ 12, 20, 56, 80, 91 ]