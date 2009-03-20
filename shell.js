function shellSort(arr){
    var len = arr.length,
        inc = 1,
        temp;

    while(inc < len){
        inc = 3 * inc + 1;
    }

    while(inc > 1){
        inc = Math.floor(inc / 3);
        for(var i = inc, j; i < len; i++){
            temp = arr[i];
            j = i - inc;
            while(j >= 0 && temp < arr[j]){
                arr[j + inc] = arr[j];
                j -= inc;
            }
            arr[j + inc] = temp;
        }
    }
    return arr;
}