function bogoSort(arr){
    while(!arr.isSorted())
        arr.shuffle();

    return arr;
}