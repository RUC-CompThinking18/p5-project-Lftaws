// In this program, this is the barebones mechanics on a rythme game
// The goal for the player is to use the mouse and arrow keys to
// navigate across the canvas and hit the notes.
// The left, right, and middle mouse buttons change the color of
// the players rectangle to the cooresponding colors.


//variable block to hold player position
var rectx = 25;
var recty = 0;
var Lline = 25;
var Rline = 25;
//variable to hold score
var score = 0;
//variable block to hold note position
var notexred = 600;
var noteyred = 0;
var notexgreen = 700;
var noteygreen = 100;
var notexblue = 800;
var noteyblue = 200;
var notexpurple = 900;
var noteypurple = 300;

var squarecolor = ''
//start of program
function setup() {
  createCanvas(600, 350);

}

function draw() {
  background(220);
  //keyIsDown block to move the player when arrow keys are pressed
  if (keyIsDown(LEFT_ARROW)) {
    if (rectx >= 0) {
      rectx -= 4;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (rectx <= 575) {
      rectx += 4;
    }
  }

  if (keyIsDown(UP_ARROW)) {

    if (recty === 100) {
      Rline = 25;
      Lline = 25;
      recty = 0;
    }

    if (recty === 200) {
      Rline = 125;
      Lline = 125;
      recty = 100;
    }

    if (recty === 300) {
      Rline = 225;
      Lline = 225;
      recty = 200;
    }



  }
  if (keyIsDown(DOWN_ARROW)) {
    if (recty === 0)
    {
      Rline = 125;
      Lline = 125;
      recty = 100;
    }
      if (recty === 100)
      {
        Rline = 225;
        Lline = 225;
        recty = 200;
      }
      if (recty === 200)
      {
        Rline = 325;
        Lline = 325;
        recty = 300;
      }
  }
  //this if block detects if one of the mouse buttons is presed to update player color
  //It also updates line position and where the new rect spawns
  if (mouseIsPressed != true) {

    line(0, Lline, 600, Rline);
    fill(0, 255, 0);
    rect(rectx, recty, 25, 50);
    squarecolor = 'green';
  }
  if (mouseIsPressed) {
    if (mouseButton === LEFT && mouseButton != RIGHT) {

      line(0, Lline, 600, Rline);
      fill(0, 0, 255);
      rect(rectx, recty, 25, 50);
      squarecolor = 'blue';
    }
    if (mouseButton === RIGHT) {

      line(0, Lline, 600, Rline);
      fill(255, 0, 0);
      rect(rectx, recty, 25, 50);
      squarecolor = 'red';

    }
    if (mouseButton === CENTER) {

      line(0, Lline, 600, Rline);
      fill(255, 0, 255);
      rect(rectx, recty, 25, 50);
      squarecolor = 'purple';
    }


  }
  //note blocks will be moving and resetting their position as a placeholder until a variable for song length and position are found.
  fill(255, 0, 0);
  rect(notexred, noteyred, 10, 50);
  line(0, noteyred + 25, 600, noteyred + 25);
  notexred = notexred - 3;
  if (notexred <= 0) {
    notexred = 600;
  }

  fill(0, 255, 0);
  rect(notexgreen, noteygreen, 10, 50);
  line(0, noteygreen + 25, 600, noteygreen + 25);
  notexgreen = notexgreen - 3;
  if (notexgreen <= 0) {
    notexgreen = 670;
  }

  fill(0, 0, 255);
  rect(notexblue, noteyblue, 10, 50);
  line(0, noteyblue + 25, 600, noteyblue + 25);
  notexblue = notexblue - 3;
  if (notexblue <= 0) {
    notexblue = 800
  }

  fill(255, 0, 255);
  rect(notexpurple, noteypurple, 10, 50);
  line(0, noteypurple + 25, 600, noteypurple + 25);
  notexpurple = notexpurple - 3;
  if (notexpurple <= 0) {
    notexpurple = 900;
  }

  if (rectx === notexred && squarecolor === 'red') {
    score = score + 1;
    print('score', score);
  }

  if (rectx === notexgreen && squarecolor === 'green') {
    score = score + 1;
    print('score', score);
  }

  if (rectx === notexblue && squarecolor === 'blue') {
    score = score + 1;
    print('score', score);
  }

  if (rectx === notexpurple && squarecolor === 'purple') {
    score = score + 1;
    print('score', score);
  }

}
