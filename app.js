//variable/huvsagch
//var name = "gfvv";
// number, string, boolean, undefined, null
//console.log(name);
// alert();
//prompt-->gras text oruulh, +prompt--> graas toon utga avh;
// +,-,/,*,%--> operator
//if,else -->hervee buyu nohtsol shalggh punkts;
//&&,||
var age =20;
//>,<,<=,>=,==,
if(age>=18){
	console.log("nasand hursen bn")
}else if(age<=3 && age >=0){
	console.log("nylh huuuhd bn")
}else if(age<18 && age>10){
	//console.log("zluu huuuhd")
}else{
	console.log("nsnd hureegui bn")
}
// 1 graas too avaad tegsh esvl sondgoi uguig shlgh
var too =+prompt("too oruulna uu");
if(too%2==0){
	console.log("tegsh too bn");
	alert("tegsh too bn");
}else{
	console.log("sondgoi too bn");
	alert("sondgoi too bn")
}
var too1 =+prompt("too dhin oruulre");
if (too1>=0){
	console.log("eyrg too bn");
	alert("eyrg too bn");
}else{
	console.log("sorg too bn");
	alert("sorg too bn");
}
var today = 2;
switch(today){
	case 1:
	   console.log("Monday")
	case 2:
	  console.log("Tuesday");
	  break;
	case 3:
	   console.log("Wednesday");
	   break;
	case 4:
	    console.log("Thursday")
		break;
    case 5:
	   console.log("Friday");
	   break;
	case 6:
	   console.log("Saturday");
	   break;
	case 7:
	   console.log("Sunday");
	   break;
	default:
	    console.log("not found");
		break;
}
//1. too1 = graas too avna
//2. graas operator (+,-,*,/)
//3.too= graas too avna 
//4.alert deer too bdj grgj irn
var too1= +prompt("too 1 oruulaarai ymrch hamaagui too");
var op = prompt("operator oruulna uu jishee n gevel: -,/,+,*");
var too2 = +prompt("too 2 oruulna uu dahaid ymarch hamaagui too oruulaarai");
switch(op){
	case "+":
	   alert(too1+too2);
	   break;
    case "-":	
	   alert(too1-too2);
	   break;
	case "*":
	   alert(too1*too);
	   break;
	case "/":
	   alert(too1/too2);
	   break;
	default:
	    console.log("buruu bn");
		break;
}

