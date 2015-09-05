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


goDown(6); 		// Rudy moves down 8 squares
goRight(3); 	// Rudy moves right 5 squares
goUp(2);		  // Rudy moves up 3 squares
goRight(2);		// Rudy moves right 2 squares
goDown(3); 		// Rudy moves down 8 squares
