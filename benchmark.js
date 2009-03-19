function bm(obj){
    var t, results = {};
    for(i in obj){
        t = new Date;
        results[i] = {'arr': obj[i].fn.apply({}, obj[i].args), 'time': new Date - t};
    }
    return results;
}