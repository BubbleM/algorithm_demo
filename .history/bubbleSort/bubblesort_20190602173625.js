let arr = [40, 8, 15, 18, 12];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  console.log('排序后'+arr);

  return arr;
}

console.log(bubbleSort(arr)) // [ 8, 12, 15, 18, 40 ]