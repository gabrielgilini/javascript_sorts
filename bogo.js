function bogoSort(arr){
    while(!arr.isSorted())
        arr = arr.shuffle();

    return arr;
}