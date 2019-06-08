基数排序（以整形为例），将整形10进制按每位拆分，然后从低位到高位依次比较各个位。主要分为两个过程：
(1)分配，先从个位开始，根据位值(0-9)分别放到0~9号桶中（比如53,个位为3，则放入3号桶中）
(2)收集，再将放置在0~9号桶中的数据按顺序放到数组中
重复(1)(2)过程，从个位到最高位（比如32位无符号整形最大数4294967296，最高位10位）
以【521 310 72 373 15 546 385 856 187 147】序列为例，具体细节如下图所示：
![](http://upload-images.jianshu.io/upload_images/3188930-d59890f9eb81ea9d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](http://upload-images.jianshu.io/upload_images/3188930-fd18bd08ffe1215e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[图片上传中。。。（3）]

在数据中最高位为3，进行了三次分配、收集过程后，变成有序数组。
平均时间复杂度：O(dn)(d即表示整形的最高位数)
空间复杂度：O(10n) （10表示0~9，用于存储临时的序列） 
稳定性：稳定

```javascript
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

/**
排序前：54,63,59,62,23

第0次遍历后counter的结果：
[ , , [ 62 ], [ 63, 23 ], [ 54 ], , , , , [ 59 ] ]
[ , , [], [], [], , , , , [] ]
第0次排序结果：62,63,23,54,59

第1次遍历后counter的结果：
[ , , [ 23 ], [], [], [ 54, 59 ], [ 62, 63 ], , , [] ]
[ , , [], [], [], [], [], , , [] ]
第1次排序结果：23,54,59,62,63

排序结果：23,54,59,62,63
*/
```