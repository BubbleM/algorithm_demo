//LSD Radix Sort
var counter = [];
/**
 * 
 * @param {*} arr 
 * @param {*} maxDigit 待排序数字的最大位数
 */
function radixSort(arr, maxDigit) {
    console.log('排序前：'+arr+'\n');
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        console.log('第'+i+'次遍历后counter的结果：');
        console.log(counter);
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
        console.log(counter);
        console.log('第'+i+'次排序结果：'+arr+'\n');
    }
    console.log('\n排序结果：'+arr);
    return arr;
}

let arr = [54, 63, 59, 62, 23];
radixSort(arr, 2);