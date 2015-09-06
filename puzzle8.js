// DEFINE FUNCTIONS ---------------------------------------



// Tells Rudy how to move DOWN 'total' number of times

function goDown(total){
  var count = 0;
  while (count < total){
    down();
    count++;
  }
}


// Tells Rudy how to move RIGHT 'total' number of times

function goRight(total){
  var count = 0;
  while (count < total){
    right();
    count++;
    }
}


// Tells Rudy how to move LEFT 'total' number of times

function goLeft(total){
  var count = 0;
  while (count < total){
    left();
    count++;
    }
}

// Tells Rudy how to move UP 'total' number of times

function goUp(total){
  var count = 0;
  while (count < total){
    up();
    count++;
    }
}


// Tells Rudy how to move down and right 'total' number of times


function navigateDown(total) {
  var steps = 0;
  while (steps < total){
    down();
    steps++;
  }
  right();
  if (remainingDots() > 0){
  goRight(1);
  }
 
}

// Tells Rudy how to move up and right 'total' number of times

function navigateUp(total) {
  var steps = 0;
  while (steps < total){
    up();
    steps++;
  }
  right();
  if (remainingDots() > 0){
  goRight(1);
  }
}

  
// Tells Rudy how to combine navigating up and down 'total' number of times, like a snake

function snake(total){
  var count = 0;
  while (count < total){
  navigateUp(7);
  navigateDown(7);
  count++;
  }
}
    
  

// EXECUTE FUNCTIONS ---------------------------------------


navigateDown(8);
snake(2);
