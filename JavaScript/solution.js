//isEven

//function isEven(num){
//	if(num%2===0){
//		return true;
//	}
//	else{ 
//		return false;
//	}
//}

function isEven(num) {
	return (num % 2 === 0);
}
	
function factorial(num){
	var result = 1;
	while(num){
		result *= num;
		num--;
	}
	
	return result;
}

function kebabTo_Snake(str){
	var newStr = str.replace(/-/g , "_");
	
	return newStr;
}