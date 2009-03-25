function countSort(arr){
    var len = arr.length,
        max = min = arr[0],
        counts = [];

    for(var i = 1; i < len; ++i)
        if(arr[i] < min)
            min = arr[i];
        else if(arr[i] > max)
            max = arr[i];

    for(var i = 0; i < len; ++i)
        counts[ arr[i] - min ] = ++counts[ arr[i] - min ] || 1;

    for(var i = min, j = 0; i <= max; ++i)
        for(var z = 0; z < counts[ i - min ]; ++z)
            arr[j++] = i;

    return arr;
}