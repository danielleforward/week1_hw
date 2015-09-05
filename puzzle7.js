
// DEFINE FUNCTIONS ---------------------------------------



// Tells Rudy how to move DOWN 'x' number of times

function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
  }
}


// Tells Rudy how to move RIGHT 'x' number of times

function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}


// Tells Rudy how to move LEFT 'x' number of times

function goLeft(total){
  var count = 0;
  while (count < total){
    left();
    count++;
    }
}

// Tells Rudy how to move UP 'x' number of times

function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}


// Tells Rudy how to move from a red square

function moveFromRed() {
  if (getColor() == "red") {
  right();
    if (remainingDots() > 0){
      right();
    }
  reverseDirection = !reverseDirection;
	}
}
  

// EXECUTE FUNCTIONS ---------------------------------------

var reverseDirection = false; // Keeps track of Y direction


while (getColor() !== "red" && reverseDirection == false && remainingDots() > 0) { // Go down if these conditions are true
  	down();
  
  	moveFromRed(); // Navigate from a red square

	while (getColor() !== "red" && reverseDirection == true && remainingDots() > 0) { // Go up if these conditions are true
  	up();
	}

	moveFromRed(); // Navigate from a red square
  
}


