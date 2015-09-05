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


goDown(2); 									// Rudy moves down 2 squares
var color = getColor();			// Rudy gets the color from the current square and stores it in variable 'color'
goDown(3); 									// Rudy moves down 3 squares
goRight(2); 								// Rudy moves right 2 squares
setColor(color);						// Rudy sets 'color' to square from 'getColor'
goRight(2);									// Rudy moves right 2 squares
goUp(1);										// Rudy moves up 1 square
