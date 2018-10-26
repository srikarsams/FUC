var data 	= document.querySelector('.data');
var tab1	= document.querySelector('.tab1');
var tab2	= document.querySelector('.tab2');
var tab3	= document.querySelector('.tab3');
var data1	= document.querySelector('.data1');
var data2	= document.querySelector('.data2');
var data3	= document.querySelector('.data3');
var h3		= document.querySelectorAll('h3');
var card	= document.querySelectorAll('.card');

function slideOne(e) {
	tab2.classList.remove('active');
	tab3.classList.remove('active');
	tab1.classList.add('active');
	data.style.transform = "translateX(0%)";
}

function slideTwo(e) {
	tab3.classList.remove('active');
	tab1.classList.remove('active');
	tab2.classList.add('active');
	data.style.transform = "translateX(-33.33%)";
}

function slideThree(e) {
	tab1.classList.remove('active');
	tab2.classList.remove('active');
	tab3.classList.add('active');
	data.style.transform = "translateX(-66.66%)";
}

function visible(e) {
	var classs = this.className;
	console.log(classs);
	for (var i=0;i<card.length;i++){
		card[i].className = 'card close';
	}
	if (classs === "card close"){
		this.className = 'card open';
	}else{
		this.className = 'card close';
	}	
}

tab1.addEventListener('click', slideOne);
tab2.addEventListener('click', slideTwo);
tab3.addEventListener('click', slideThree);

for(var j=0;j<card.length;j++){
	card[j].addEventListener('click', visible);
}
