var ball={
x:20,
y:50,
r:30,
xspeed:0,
yspeed:0,
color:["blue","pink","yellow"],
};







function setup() {
  
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[2]);
  ball.xspeed=2;
  ball.x=ball.x+ball.xspeed;
}