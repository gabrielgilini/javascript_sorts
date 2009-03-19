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