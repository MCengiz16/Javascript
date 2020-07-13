function speed(x){
	if(x<75) {
		return 'OK'
	}
	else {
		point=Math.floor((x-70)/5);
		if(point<12)return 'you got '+point+ ' points';
		else return 'you are suspended';
	}
}

console.log(speed(80));