function quickSort(arr){
    var len = arr.length,
        pivot = arr[Math.floor(len/2) - 1],
        lt = [], //lesser than pivot
        gt = []; //greater than pivot

    if(len <= 1){
        return arr;
    }
    else{
        for(var i in arr){
            if(arr[i] < pivot)
                lt.push(arr[i]);
            else if(arr[i] > pivot)
                gt.push(arr[i]);
        }
        return Array.prototype.concat(quickSort(lt), pivot, quickSort(gt));
    }
}
