/*ex1*/
function showText(){
	document.getElementById('s_text').innerHTML="Hello Everyone";
}


/*ex2*/
function showT1(){
	document.getElementById('s_t1').innerHTML="My name is Srabonty.I am a student";
}

/*ex3*/
function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}
/*ex4*/
function lighton(){
	document.getElementById('img').src="images/on.gif";
}

function lightoff(){
	document.getElementById('img').src="images/off.gif";
}

/*ex5*/
function showContent(){
	document.getElementById('con').style.display="block";
}

function hideContent(){
	document.getElementById('con').style.display="none";
} 

/*ex6*/
function bulbon(){
	document.getElementById('l_img').src="images/images1.png";
}

function bulboff(){
	document.getElementById('l_img').src="images/images.png";
}

/*ex7*/
function showCon(){
	document.getElementById('pic').src="images/pic.png";
}

function hideCon(){
	document.getElementById('pic').style.display="none";
} 

/*ex8*/
  
  var number1=5;
  var number2=4;

  var result = number1+number2;