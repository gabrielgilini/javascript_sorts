function bubbleSort(arr){
    var len = arr.length,
        sorted;
//console.log(arr, 'normal', 'unique?', arr.isUnique());
    do{
        for(var i = len; i >= 1; i--){
            sorted = false;
            for(var j = 1; j <= (i - 1); j++){
                if(arr[j] > arr[j+1]){
                    arr.swap(j, j+1);
                    sorted = true;
                }
            }
        }
    }while(sorted);
    //console.log(arr, 'sorted');
    return arr;
}