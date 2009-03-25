var wp = google.gears.workerPool;
wp.onmessage = cb;

function cb(a,b,m){
    function F(){}
    //F.apply(this, []);
    //wp.sendMessage(bm(m.body), m.sender);
}

function bm(obj){
	var t, results = {};
	for(i in obj){
		t = new Date;
		results[i] = {'arr': obj[i].fn.apply(this, obj[i].args), 'time': new Date - t};
	}
	return results;
}
