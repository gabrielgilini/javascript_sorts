String.prototype.padLeft = function(n, ch){
    var s = this;
    while(s.length < n){
        s = ch + s;
    }
    return s;
}