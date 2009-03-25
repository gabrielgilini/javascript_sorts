function bucketSort(arr){
    var len = arr.length,
        buckets = [],
        digit = 0,
        maxD = 0,
        bLen;

    if(len == 1) return arr[0];

    for(var i = (len - 1); i >= 0; --i){
        if(arr[i].length > maxD)
            maxD = arr[i].length;
    }

    for(var i = 0, bIndex; i < len; ++i){
        if(arr[i]){
            bIndex = arr[i][digit];
            if(!buckets[bIndex]) buckets[bIndex] = [];
            buckets[bIndex].push(arr[i]);
        }
    }
    bLen = buckets.length;
    arr = [];
    for(var j = 0; j < bLen; ++j){
        if(buckets[j]){
            buckets[j].sort(function(a,b){return a-b});
            for(var k = -1, l = buckets[j].length - 1; k < l; arr.push(buckets[j][++k]));
        }
    }

    return arr;
}