var line,drawing = [];
function setup() {
  createCanvas(800,800);
}

function draw() {
  background(100); 
  beginShape();
  noFill();
   for(var i = 0; i < drawing.length ; i++){
    vertex(drawing[i].x,drawing[i].y);
    endShape();
  }
  drawSprites();
}

function mouseDragged(){
  var point = {x:mouseX,y:mouseY};
  drawing.push(point);
}