const array=[0,4,null,NaN,'dff','',78,false, undefined,'elma'];

console.log(countFalsy(array));

/*Falsy
  undefined
  null
  ''
  false
  0
  NaN*/

function countFalsy(array){
	let sum=0;
	
	for (let x of array){
		if (!x){
			console.log(x)
			sum++;
		}
		
		}
		return sum;
	}
	
