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



// Get first green dot

goDown(4); 									// Rudy moves down 2 squares
goRight(1);									// Rudy moves right 1 square
var color = getColor();			// Rudy gets the color from the current square and stores it in variable 'color'
goDown(1); 									// Rudy moves down 1 square
setColor(color);						// Rudy sets 'color' to square from 'getColor'
goRight(2); 								// Rudy moves right 2 squares


// Get second green dot


goUp(1);										// Rudy moves up 1 square
goRight(1);									// Rudy moves right 1 square
var color = getColor();			// Rudy gets the color from the current square and stores it in variable 'color'
goDown(1); 									// Rudy moves down 1 square
setColor(color);						// Rudy sets 'color' to square from 'getColor'
goRight(2);									// Rudy moves right 2 squares
