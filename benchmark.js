function bench(fn, args){
    var result,
        t = new Date;
    result = fn.apply(this, [args]);
    t = new Date - t;
    return t + 'ms';
}