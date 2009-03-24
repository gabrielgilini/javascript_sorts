function bubbleSort(arr){
    var len = arr.length,
        sorted;

    do{
        for(var i = len; i > 0; i--){
            sorted = false;
            for(var j = 0; j < i; j++){
                if(arr[j] > arr[j+1]){
                    arr.swap(j, j+1);
                    sorted = true;
                }
            }
        }
    }while(sorted);

    return arr;
}