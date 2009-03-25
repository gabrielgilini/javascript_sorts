function radixSort(arr){ // The arr input should be an array of numeric strings with same length
    var len = arr.length,
        buckets = [],
        digit = 0,
        maxD = 0,
        bLen;

    for(var i = (len - 1); i >= 0; --i){
        if(arr[i].length > maxD)
            maxD = arr[i].length;
    }
    digit = maxD;

    while(--digit >= 0){
        for(var i = 0, bIndex; i < len; ++i){
            if(arr[i]){
                bIndex = (!arr[i][digit] && (arr[i].length < maxD)) ? 0 : arr[i][digit];
                if(!buckets[bIndex]) buckets[bIndex] = [];
                buckets[bIndex].push(arr[i]);
            }
        }
        bLen = buckets.length;
        arr = [];
        for(var j = 0; j < bLen; ++j){
            if(buckets[j]){
                for(var k = 0, l = buckets[j].length; k < l; k++){
                    arr.push(buckets[j][k]);
                }
            }
        }
        buckets = [];
    }

    return arr;
}