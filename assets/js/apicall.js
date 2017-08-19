var btn = document.getElementById('btn');
var simplify = document.getElementById('simplify');
var factor = document.getElementById('factor');
var derive = document.getElementById('derive');
var integrate = document.getElementById('integrate');
var zeroes = document.getElementById('zeroes');
var ftangent = document.getElementById('ftangent');
var area = document.getElementById('area');
var cos = document.getElementById('cos');
var sin = document.getElementById('sin');
var tan = document.getElementById('tangent');
var cosin = document.getElementById('cosin');
var sinin = document.getElementById('sinin');
var tanin = document.getElementById('tanin');
var abs = document.getElementById('abs');
var log = document.getElementById('log');
var operation = "";
var expression = document.getElementById('expression');

simplify.addEventListener("click", function (){
	operation = "simplify";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

factor.addEventListener("click", function (){
	operation = "factor";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

derive.addEventListener("click", function (){
	operation = "derive";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

integrate.addEventListener("click", function (){
	operation = "integrate";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

zeroes.addEventListener("click", function (){
	operation = "zeroes";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

ftangent.addEventListener("click", function (){
	operation = "tangent";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

area.addEventListener("click", function (){
	operation = "area";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

cos.addEventListener("click", function (){
	operation = "cos";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

sin.addEventListener("click", function (){
	operation = "sin";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

tan.addEventListener("click", function (){
	operation = "tan";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

cosin.addEventListener("click", function (){
	operation = "arccos";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

sinin.addEventListener("click", function (){
	operation = "arcsin";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

tanin.addEventListener("click", function (){
	operation = "arctan";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

abs.addEventListener("click", function (){
	operation = "abs";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

log.addEventListener("click", function (){
	operation = "log";
	document.getElementById('operation').insertAdjacentHTML('afterbegin', "Operation to perform: " + operation);
});

console.log(simplify);
btn.addEventListener("click", function (){
	expression = document.getElementById('expression').value;
	console.log(expression);
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://newton.now.sh/' + operation + '/' + expression);

	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderData(ourData);
	};

	ourRequest.send();
});

function renderData(someData){
	var answerString = "";
	var answer = someData.result;
	answerString += "Answer is:<br>" + answer;
	document.getElementById('answer').insertAdjacentHTML('afterbegin', answerString);
} 