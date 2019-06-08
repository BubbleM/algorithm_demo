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