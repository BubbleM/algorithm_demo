let arr = [40, 8, 15, 18, 12];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr);
  }

  return arr;
}

console.log(bubbleSort(arr)) // [ 8, 12, 15, 18, 40 ]