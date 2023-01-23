let sandY_sec = 0;
let grainY_sec = 0;
let sandY_min = 0;
let grainY_min = 0;
let sandY_hour = 0;
let grainY_hour = 0;

var hour_xs = [], hour_ys = [];
var minute_xs = [], minute_ys = [];
var second_xs = [], second_ys = [];


function setup() {
  createCanvas(900, 600);
  //600 w speed 10: 60 seconds 
  //600 w speed 1/10: 60 minutes and ratio to seconds and hours
  //600 w speed 1/100: 
  noStroke();
   for (var i = 0; i < 24; i++){
    append(hour_xs, random(105,240));
    append(hour_ys, 600- random(hour()));
  }

  for (var i = 0; i < 60; i++){
    append(minute_xs, random(250, 390));
    append(minute_ys, 600 - random(minute()));
  }

  for (var i = 0; i < 60; i++){
    append(second_xs, random(405, 540));
    append(second_ys,600 - random(second()));
  }
  
}

function draw() {
  background(254,224,139);
  
  
  fill(158,1,66)
  sandY_hour = 600 - (hour() *10);
  noStroke();

  rect(100, sandY_hour, 150, 600);
  grainY_hour += 1/100

  circle(175 , grainY_hour, 25);
  if (grainY_hour >= 600){
    grainY_hour = 0;
  }
  
  
  fill(245,109,67)
  sandY_min = 600 - (minute() * 10);
  noStroke();

  rect(250, sandY_min, 150, 600);
  grainY_min += 1/10
  
  circle(325, grainY_min, 15);
  if (grainY_min >= 600){
    grainY_min = 0;
  }
  
  fill(94,79,162)
  sandY_sec = 600 - (second() * 10);
  noStroke();

  rect(400, sandY_sec, 150, 600);
  grainY_sec += 10
  
  circle(475, grainY_sec, 10);
  if (grainY_sec >= 600){
    grainY_sec = 0;
  }
  for (var i = 0; i < second(); i++){
    drawBall(second_xs[i], second_ys[i], 10, 80);
  }
  for (var i = 0; i < minute(); i++){
    drawBall(minute_xs[i], minute_ys[i], 15, 70);
  }

  for (var i = 0; i < hour(); i++){
    drawBall(hour_xs[i], hour_ys[i], 25, 60);
  }
  
  
  
}  
function drawBall(x, y, dia, k) {
  fill(225, 150); 
  ellipse(x, y, dia, dia);
  
}
  
