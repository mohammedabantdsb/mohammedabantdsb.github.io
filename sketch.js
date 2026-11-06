//declare variables x and y
//and set them both to 300
var x = 300;
var y = 300;
function setup() {
  createCanvas(600, 600);
  //black background
  background(0, 0, 0);
}
//the draw()function is an infinite loop
function draw() {
  for (let i = 0; i < 100; i++) {
    //colour dots green
    stroke("green");
    //at random pick a number between 1 and 3
    var corner = random(1, 3);
    //round to nearest integer
    corner = round(corner);
    //treat corner 1 as point A (300,0)
    if (corner == 1) {
      //code midpoint
      x = (x + 300) / 2;
      y = (y + 0) / 2;
      //output point to canvas
      //point(x, y);
    } //end if

    //treat corner 2 as point B (600,600)
    if (corner == 2) {
      //code midpoint
      x = (x + 600) / 2;
      y = (y + 600) / 2;
      //output point to canvas
      //point(x,y);
    } //end if

    //treat corner 3 as point A (0,600)
    if (corner == 3) {
      //code midpoint
      x = (x + 0) / 2;
      y = (y + 600) / 2;
      //output point to canvas
      //point(x,y);
    } //end if

    point(x, y);
  }
} //end draw()
