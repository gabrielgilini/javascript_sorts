function heapSort(arr){
    var len = arr.length,
        end = len - 1;
    arr = heapify(arr.clone());

    while(end > 0){
        arr.swap(end, 0);
        --end;
        siftDown(arr, 0, end);
    }
    return arr;
}

function heapify(arr){
    var len = arr.length,
        start = (len - 2)/2;

    while(start >= 0){
        siftDown(arr, start);
        --start;
    }
    return arr;
}

function siftDown(arr, start, end){
    var root = start,
        child;
    end = end || arr.length - 1;

    while((child = root * 2 + 1) <= end){
        if((child + 1) <= end && arr[child] < arr[child + 1])
            ++child;
        if(arr[root] < arr[child]){
            arr.swap(root, child);
            root = child;
        }
        else{
            return;
        }
    }
}