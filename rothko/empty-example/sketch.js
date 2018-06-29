// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />
var clicks = 0;
  var keys = 0;
var time = 0;
var timespeed = 0;
var myHue = 0;


function setup() {
  createCanvas(400, 400);
angleMode(DEGREES);
colorMode(HSB);
}
function draw() {
  time = time + timespeed;
  var ellipseOffset = time % 400;
  var myHue = time % 100;
 if (ellipseOffset > 200) {
   background('green');
 }
 
 else if (ellipseOffset < 200) {
background(myHue, 100, 100);
 }

 if (keyIsPressed) {
   timespeed = 2;
 } else {
timespeed = 1; 
}


  fill('blue');
  strokeWeight(clicks % 5);
  ellipse(ellipseOffset, 75, 100 + clicks * 10, 100 + keys * 10);
  ellipse(100, 250 + clicks * 5, 50 + keys * 10);

    fill('red');
}
    function mouseReleased() {
      clicks = clicks + 1;
    }

    function keyReleased() {
      keys = keys + 1;
    }
