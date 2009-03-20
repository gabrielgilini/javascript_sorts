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

Array.prototype.compare = function(arr){
    for(var i = 0, j = this.length; i < j; i++){
        if(this[i] != arr[i])
            return false;
    }
    return true;
}