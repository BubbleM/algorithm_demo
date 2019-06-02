var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function bubbleSort(arr){
    let len = arr.length,
        temp;
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}
bubbleSort(arr);