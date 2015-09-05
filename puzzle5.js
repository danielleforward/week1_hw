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



// Tells Rudy how to move down 'x' number of times

function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
  }
}


// Tells Rudy how to move right 'x' number of times

function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}


// Tells Rudy how to move up 'x' number of times

function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}



// EXECUTE FUNCTIONS ---------------------------------------


goRight(2);												// Rudy moves right 2 squares

while (getColor() == "blue") {		// Executes loop as long as current square is blue
  goDown(1);
  goRight(2);
}
           
while (getColor() == "red") {			// Executes loop as long as current square is red
  goUp(1);
  goRight(2);
}  
  
goRight(1);												// Rudy moves right 1 square



