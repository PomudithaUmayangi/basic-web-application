function LoadData(name){
	if(name=='btn1'){
		document.getElementById("para").innerHTML="The iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then–Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates";
		document.getElementById("Image1").src="images/iPhone.jfif";
	}
	
	else if (name=='btn2'){
		document.getElementById("para").innerHTML="Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems. It has become one of the most-recognizable names in technology and produces about a fifth of South Korea's total exports.";
		document.getElementById("Image1").src="images/samsung.jfif";
	}
	
	else if (name=='btn3'){
		document.getElementById("para").innerHTML="Oppo is a Chinese consumer electronics manufacturer headquartered in Dongguan, Guangdong. Its major product lines include smartphones, smart devices, audio devices, power banks, and other electronic products. Guangdong Oppo Mobile Telecommunications Corp., Ltd. Guangdong Oppo Mobile Telecommunications Corp., Ltd.";
		document.getElementById("Image1").src="images/oppo.jfif";
	}
	
	else if (name=='btn4'){
		document.getElementById("para").innerHTML="Nokia is a Finnish communications and information technology company. Founded in 1865, the company is headquartered in Espoo and employs close to 88,000 people. Over the years, Nokia has ventured into different markets.";
		document.getElementById("Image1").src="images/nokia.jfif";
	}
	else{
		alert("Invalid !!!");
	}
}

function priceForLoop(){
	var phone = ["product iPhone = Rs500000","product samsung - Rs200000","product oppo - Rs150000","product nokia - Rs100000"];
	
	for (i = 0, len=phone.length, list="LIST OF AVERAGE PRICES(USING FOR LOO) <br/>";i<len; i++) {
     list += phone[i]+"<br/>";
    }
	document.getElementById("Image1").src="images/phonepic.jpg";
	document.getElementById("para").innerHTML = list;
}

function priceHigher(){
	var phone = [];
	phone["iphone"]= 500000;
	phone["samsung"]= 200000;
	phone["oppo"]= 150000;
	phone["nokia"]= 100000;
	
	var HighPrice = "LIST OF HIGH COST MOBILE PHONES <br>";
	for (var item in phone){
		if (phone[item]>210000){
			HighPrice += item+" : " + phone[item] + "<br>";
	}
	}
	document.getElementById("Image1").src="images/list.jfif";
	document.getElementById("para").innerHTML = HighPrice;
}

function pricelower(){
	var phone = [];
	phone["iphone"]= 500000;
	phone["samsung"]= 200000;
	phone["oppo"]= 150000;
	phone["nokia"]= 100000;
	
	var lowPrice = "LIST OF HIGH COST MOBILE PHONES <br>";
	for (var item in phone){
		if (phone[item]<210000){
			lowPrice += item+" : " + phone[item] + "<br>";
	}
	}
	document.getElementById("Image1").src="images/list.jfif";
	document.getElementById("para").innerHTML = lowPrice;
}

function checkPassword(){
	document.getElementById("password").value != document.getElementById("Repassword").value
	{
		alert ("Password Mismatch!");
		return false;
	}
	else 
	{
		alert ("Success!");
		return true;
	}
}

function enableButton(){
	if(document.getElementById("check").checked){
		document.getElementById("submitbtn").disabled=false;
	}
	else{
		document.getElementById("submitbtn").disabled=true;
	}
}