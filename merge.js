function mergeSort(arr){
    var len = arr.length;

    if(len <= 1){
        return arr;
    }
    else{
        var mid = Math.floor(len/2),
            l = arr.slice(0, mid),
            r = arr.slice(mid);

        l = mergeSort(l);
        r = mergeSort(r);
        return merge(l, r);
    }
}

function merge(arrL, arrR){
    var result = [];

    while(arrL.length && arrR.length){
        result.push((arrL[0] <= arrR[0])?
            arrL.shift():
            arrR.shift()
        );
    }

    return result;
}