function selectionSort(arr){
    var len = arr.length;

    for(var i = 0, smallerIndex = false; i < len; i++){
        for(var j = i; j < len; j++){
            if(arr[j] < arr[smallerIndex] || smallerIndex === false)
                smallerIndex = j;
        }
        if(smallerIndex !== false){
            arr.swap(i, smallerIndex);
            smallerIndex = false;
        }
    }

    return arr;
}