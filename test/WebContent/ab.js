const a = Number(prompt("숫자 입력 : "));
const b = Number(prompt("숫자 입력 : "));

if (a+b < 100){
	alert(a+b);
	alert("100보다 작습니다.");
	console.log("100보다 작습니다.");
} else if(a+b > 100){
	alert(a+b);
	alert("100보다 큽니다.");
	console.log("100보다 큽니다.");
} else{
	alert(a+b);
	alert("100!!");
	console.log("100!!");
}