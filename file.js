



var start = document.querySelector('.control-btns span'),
	names = document.querySelector('.name span');

start.onclick = function(){
	let yourName = prompt('What Is Your Name ?');
	
	if(yourName == null || yourName == ""){
		names.innerHTML = 'Unknown';
	}else{
		names.innerHTML = yourName;
	}
	document.querySelector('.control-btns').remove();
	document.getElementById('back').play()
	localStorage.setItem('player', yourName)
}

let duration = 500;

let blocksCon = document.querySelector('.memory-game')
	blocks = Array.from(blocksCon.children),
//	orderRange = [...Array(blocks.length).keys()];
	orderRange = Array.from(Array(blocks.length).keys())
	shuffle(orderRange);
	
	
blocks.forEach((block, index) => {
	
	block.style.order = orderRange[index];
	
	block.addEventListener('click', function(){
		flibBlock(block);
})
})
function flibBlock(selected){
	selected.classList.add('flipped');
	let allFlipped = blocks.filter(flipped => flipped.classList.contains('flipped'));
		
	
	if(allFlipped.length === 2){
		//console.log('two')
		stopClick();
		
		matchBlock(allFlipped[0],allFlipped[1])
	}
	
	

}
let triesElement = document.querySelector('.tries span');
	
function matchBlock(firstblock, secondblock){
	if(firstblock.dataset.lang === secondblock.dataset.lang){
		firstblock.classList.remove('flipped');
		secondblock.classList.remove('flipped');
		
		firstblock.classList.add('matches');
		secondblock.classList.add('matches');
		
		document.getElementById('success').play();
	}else{
		setTimeout(() =>{
			firstblock.classList.remove('flipped');
		secondblock.classList.remove('flipped');
		}, duration)
		triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1
		document.getElementById('fail').play();
	}
	let matches = blocks.filter(match => match.classList.contains('matches'));
	if(matches.length === 20){
		document.querySelector('.congrats').style.display = 'block';
		document.querySelector('.congrats p span').innerHTML = triesElement.innerHTML;
		
	}



}
function stopClick(){
	
	blocksCon.classList.add('Unclickable');
	
	setTimeout(() => {
		
		blocksCon.classList.remove('Unclickable');
		
	},duration)
	
}

function shuffle(array){
	
	let current = array.length,
		temp,
		random;
	
	while(current > 0){
		random = Math.floor(Math.random() * current);
		current--;
		
		temp = array[current];
		
		array[current] = array[random];
		
		array[random] = temp;
		Set[random] = temp
	}
	return array
	
}
let ar4 = localStorage.getItem('h2').split(',').splice(0,5),
	ar6 = localStorage.getItem('p2').split(',').splice(0,5)
document.querySelector('.congrats').onclick = function(){
	this.style.display = 'none';
	localStorage.setItem('h',localStorage.getItem('h2').split(','))
	localStorage.setItem('h2', [triesElement.innerHTML].concat(ar4))
	localStorage.setItem('p',localStorage.getItem('p2').split(','))
	localStorage.setItem('p2', [names.innerHTML].concat(ar6))
	console.log(localStorage.getItem('h2').split(','))
	console.log(localStorage.getItem('h'))
	console.log(localStorage.getItem('p2').split(','))
	console.log(localStorage.getItem('p'))
	triesElement.innerHTML = '0';
	blocks.forEach((el, ind) => {
		blocks[ind].classList.remove('matches')
	})
	shuffle(orderRange);
	blocks.forEach((block, index) => {
	
	block.style.order = orderRange[index];
})
	let soc = localStorage.getItem('h2').split(',').shift()
	let play = localStorage.getItem('p2').split(',').shift()
	let textNode1 = document.createTextNode(soc),
			node1 = document.createElement('span');
		node1.appendChild(textNode1);
		document.querySelector('.highscore .score').insertBefore(node1 , document.querySelector('.highscore .score').childNodes[2])
		console.log(node1)
	let textNode = document.createTextNode(play),
			node = document.createElement('span');
		node.appendChild(textNode);
		document.querySelector('.highscore .playername').insertBefore(node , document.querySelector('.highscore .playername').childNodes[2])
		console.log(node)

}

	console.log(localStorage.getItem('h2').split(','))
	console.log(localStorage.getItem('h'))
	console.log(localStorage.getItem('p2').split(','))
	console.log(localStorage.getItem('p'))

	ar4.forEach((a,b) =>{
		let textNode = document.createTextNode(a),
			node = document.createElement('span');
		node.appendChild(textNode);
		document.querySelector('.highscore .score').appendChild(node)
		console.log(node)
	})
	ar6.forEach((a,b) =>{
		let textNode = document.createTextNode(a),
			node = document.createElement('span');
		node.appendChild(textNode);
		document.querySelector('.highscore .playername').appendChild(node)
		console.log(node)
	})
