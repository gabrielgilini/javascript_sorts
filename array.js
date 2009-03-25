function randomArr(len, min, max){
    if(!len)
        return [];

    var arr = [];
    min = min || 0;
    max = max || 100;

    for(var i = 0; i < len; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}

// adapted from Mozilla's forEach
Array.prototype.forEach = function(fun /*, thisp*/){
    var len = this.length >>> 0;
    if (typeof fun != "function")
        throw new TypeError();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++){
        if (i in this)
            fun.call(thisp, this[i], i, this);
    }
    return this;
};


Array.prototype.unique = function(){
    var sorter = {};
    var out = [];
    for(var i = 0, j = this.length; i < j; i++){
        if(!sorter[this[i] + typeof this[i]]){
            out.push(this[i]);
            sorter[this[i] + typeof this[i]] = true;
        }
    }
    return out || this;
}
Array.prototype.isUnique = function(){
    for(var i = 0, j = this.length; i < j; i++){
        for(var k = 0; k < j; k++){
            if(i != k && this[i] == this[k])
                return false;
        }
    }
    return true;
}
Array.prototype.compare = function(arr){
    for(var i = 0, j = this.length; i < j; i++){
        if(this[i] != arr[i])
            return false;
    }
    return true;
}

Array.prototype.swap = function(posA, posB){
    var temp = this[posB];
    this[posB] = this[posA];
    this[posA] = temp;
    return this;
}

Array.prototype.clone = function(){
    var cloned = [],
        len = this.length;

    for(var i = 0; i < len; i++){
        cloned[i] = this[i];
    }

    return cloned;
}

Array.prototype.getMaxStringLength = function(){
    var len = this.length,
        maxL = 0;

    for(var i = 0; i < len; i++){
        if(typeof this[i] == 'string' && this[i].length > maxL)
            maxL = this[i].length;
    }

    return maxL;
}

Array.prototype.numberToString = function(){
    var len = this.length;

    for(var i = 0; i < len; i++){
        if(typeof this[i] == 'number')
            this[i] += '';
    }

    return this;
}

Array.prototype.isSorted = function(){
    var len = this.length;

    for(var i = 0; i < len; i++){
        if(typeof this[ i + 1 ] == 'number' && this[ i + 1 ] < this[i])
            return false;
    }

    return true;
}

Array.prototype.shuffle = function(){
    var len = this.length,
        shuffled = [],
        rIndex;

    for(var i = 0; i < len; i++){
        do{
            rIndex = Math.floor(Math.random() * len);
        }while(shuffled[rIndex]);
        shuffled[rIndex] = this[i];
    }

    return shuffled;
}