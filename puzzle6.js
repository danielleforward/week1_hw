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



// EXECUTE FUNCTIONS ---------------------------------------


goRight(1);										// Rudy moves right one square

if (getColor() == "blue") {	  // Rudy goes DOWN if square is blue									
	goDown(3);
	goRight(1);
	goDown(1);
} else {										 	// Rudy goes UP if square isn't blue
	goUp(3);
	goLeft(1);
	goUp(1);
}





