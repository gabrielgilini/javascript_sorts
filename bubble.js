function bubbleSort(arr){
    var len = arr.length;

    for(var i = len; i >= 1; i--){
        for(var j = 1; j <= i - 1; j++){
            if(arr[j] > arr[j+1])
                arr.swap(j, j+1);
        }
    }
    return arr;
}