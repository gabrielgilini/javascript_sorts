//A native Array.prototype.sort wrapper for benchmarking comparisons
function nSort(arr){
    return arr.sort(function(a,b){return a-b});
}