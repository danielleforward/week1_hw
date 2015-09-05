// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match



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


