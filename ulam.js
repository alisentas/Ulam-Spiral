function ulam(container, width, height, cubeWidth, count){
	container.innerHTML = "";//clear container
	var canvas = document.createElement("canvas"); //create canvas
	var ctx = canvas.getContext("2d");
	
	var	dir = "right"; //program direction
	var turn = 0; //turns passed in that direction
	var turns = 2; //total turns shouldve pass
	var turnRow = 0; //all turns should pass twice, for example right: 2, down: 2 left: 3, up: 3, right: 4...
	var m;//for leastFactor
	ctx.beginPath();
	var cubeWidth = parseInt(document.getElementById("cubeWidth").value, 10);//width of all prime cubes
	var count = parseInt(document.getElementById("count").value,10); //count of numbers should program check, not prime count
	canvas.width = parseInt(document.getElementById("width").value,10);
	canvas.height = parseInt(document.getElementById("height").value,10);
	ctx.fillStyle = "black";

	//ctx.rect(canvas.width / 2, canvas.height / 2, cubeWidth, cubeWidth);
	ctx.rect(canvas.width / 2 + cubeWidth,canvas.height / 2, cubeWidth, cubeWidth); //fill number 2
	ctx.rect(canvas.width / 2 + cubeWidth,canvas.height / 2 - cubeWidth,cubeWidth,cubeWidth); //fill number 3
	curLoc = [canvas.width / 2 + cubeWidth,canvas.height / 2 - cubeWidth];//start with number 4
	
	// I've used a fast prime function found from http://www.javascripter.net/faq/numberisprime.htm
	isPrime = function(n) {
		if (n%1 || n<2) return false;
		if (n==leastFactor(n)) return true;
		return false;
	}

	leastFactor = function(n){
		if (isNaN(n) || !isFinite(n)) return NaN;  
		if (n==0) return 0;
		if (n%1 || n*n<2) return 1;
		if (n%2==0) return 2;
		if (n%3==0) return 3;
		if (n%5==0) return 5;
		m = Math.sqrt(n);
		for (var i=7;i<=m;i+=30) {
			if (n%i==0)      return i;
			if (n%(i+4)==0)  return i+4;
			if (n%(i+6)==0)  return i+6;
			if (n%(i+10)==0) return i+10;
			if (n%(i+12)==0) return i+12;
			if (n%(i+16)==0) return i+16;
			if (n%(i+22)==0) return i+22;
			if (n%(i+24)==0) return i+24;
		}
		return n;
	}
	for(i = 4; i <= count; i++){
		switch(dir){
			case "right":
				//if we are going into right, we should increment turn
				turn++;
				if(turn == turns) {
					// if turn is equal to max turns, turnrow should increment
					//if turnrow equals to 2, turns should increment
					turnRow ++;
					dir = "down";
					turn = 0;
					if(turnRow == 2){
						turnRow = 0;
						turns++;
					}
				}
				curLoc[0] -= cubeWidth;//
				if(isPrime(i)){
					//if i is prime, fill!
					ctx.rect(curLoc[0],curLoc[1],cubeWidth,cubeWidth);
				}
			break;
			case "down":
				turn++;
				if(turn == turns) {
					dir = "left";
					turn = 0;
					turnRow ++;
					if(turnRow == 2){
						turnRow = 0;
						turns++;
					}
				}
				curLoc[1] += cubeWidth;
				if(isPrime(i)){
					ctx.rect(curLoc[0],curLoc[1],cubeWidth,cubeWidth);
				}
			break;
			case "left":
				turn++;
				if(turn == turns) {
					dir = "up";
					turn = 0;
					turnRow ++;
					if(turnRow == 2){
						turnRow = 0;
						turns++;
					}
				}
				curLoc[0] += cubeWidth;
				if(isPrime(i)){
					ctx.rect(curLoc[0],curLoc[1],cubeWidth,cubeWidth);
				}
			break;
			case "up":
				turn++;
				if(turn == turns) {
					dir = "right";
					turn = 0;
					turnRow ++;
					if(turnRow == 2){
						turnRow = 0;
						turns++;
					}
				}
				curLoc[1] -= cubeWidth;
				if(isPrime(i)){
					ctx.rect(curLoc[0],curLoc[1],cubeWidth,cubeWidth);
				}
			break;
		}
	}
	ctx.fill(); //fill up the board ! yay
	container.appendChild(canvas); //append canvas to container
}