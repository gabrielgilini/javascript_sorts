function radixSort(arr){ // The arr input should be an array of numeric strings
    var len = arr.length,
        buckets = [],
        digit = 0,
        found,
        bLen;

    do{
        found = false;
        for(var i = 0; i < len; i++){
            if(arr[i] && arr[i][digit]){
                if(!buckets[arr[i][digit]]) buckets[arr[i][digit]] = [];
                buckets[arr[i][digit]].push(arr[i]);
                found = true;
            }
        }
        bLen = buckets.length;
        arr = [];
        for(var j = 0; j < bLen; j++){
            if(buckets[j]){
                for(var k = 0, l = buckets[j].len; k < l; k++){
                    arr.push(buckets[j][k]);
                }
            }
        }
    }while(found && ++digit);

    return arr;
}