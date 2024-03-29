let arr = [65, 27, 59, 64, 58];

function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) { //动态定义间隔序列
        gap =gap*3+1;
        console.log('定义间隔为：'+gap);
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        console.log('间隔为'+gap+'排序前：'+arr);
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
                console.log('内部排序中!!调整：'+arr);
            }
            arr[j+gap] = temp;
            console.log('需在'+(j+gap)+'位置插入'+temp+'后：'+arr);
        }
        console.log('排序后：'+arr);
        console.log('-------------------');
    }
    console.log('最终结果:'+arr);
    return arr;
}

shellSort(arr);