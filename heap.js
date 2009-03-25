Array.prototype.sift = function(i){
    var l = this.length - 1,
        j = 2 * i,
        t = this[i];

    while(j <= l){
        if(j < l && this[j] < this[j + 1])
            ++j;
        if(t >= this[j])
            break;
        this[i] = this[j];
        i = j;
        j = 2 * i;
    }

    this[i] = t;

    return this;
}

Array.prototype.heapify = function(){
    var len = this.length,
        i = Math.floor(len/2);

    while(i >= 0){
        this.sift(i--);
    }

    return this;
}

function heapSort(arr){
    var len = arr.length,
        end = len - 1;

    arr.heapify();

    /*while(end > 0){
        arr.swap(end, 0);
        --end;
        arr.sift(end);
    }*/
    return arr;
}
