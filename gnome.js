function gnomeSort(arr){
    var len = arr.length
        i = 0;

    while(i < len){
        if (i == 0 || arr[i-1] <= arr[i]) i++;
        else arr.swap(i, --i);
    }

    return arr;
}