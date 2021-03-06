let zombies =[];


function setup() {
  createCanvas(400, 400);
  
  for (let k = 0; k < 10; k++){
    zombies.push(new Mover());
  }
}

function draw() {
  background(123,104,238);
  for (let k = 2; k < zombies.length; k++){
    zombies[k].gerakInsyaaAllah();
    zombies[k].tampil();
    zombies[k].cekBatas();
 }
}

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.1,-0.1);
  }
  
    tampil(){
    noStroke();
    fill('pink');
    rect(this.location.x, 
             this.location.y, 
             20, 
             20);
  }
  
  gerakInsyaaAllah(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 2;
    
    arahMouse.normalize();
    arahMouse.mult(0.3); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -2*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -3*this.velocity.y
    }
  }
}