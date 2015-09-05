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

// Tells Rudy to move down 'x' number of times

function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
  }
}


// Tells Rudy to move right 'x' number of times

function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}


// Tells Rudy to move up 'x' number of times

function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}


// EXECUTE FUNCTIONS ---------------------------------------


goDown(8); 		// Rudy moves down 8 squares
goRight(5); 	// Rudy moves right 5 squares
goUp(3);		  // Rudy moves up 3 squares
goRight(2)		// Rudy moves right 2 squares
