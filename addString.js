function add(str){
	const inputString = str;
	const numbers = inputString.match(/-?\d+\b/g);
	let output = 0
	for(let i=0;i<numbers.length;i++){
	  if(Number(numbers[i])>0){
	    output+=Number(numbers[i])
	  }
	  else output='negative numbers not allowed'+'<'+Number(numbers[i])+'>'
	}
	return output

}
function additiontest(str, expectedvalue){
    add(str)===expectedvalue? console.log("✅ Test Passed") 
    : console.error("❌ Test Failed");

}

additiontest("1\n2,3",6)
additiontest('5\n7\n\n7\n5',24)
additiontest("1,5", 6)
additiontest("1,5,-2,3, -1", 'negative numbers not allowed<-1>')
additiontest("1,5,-2,3, -1", 7)
