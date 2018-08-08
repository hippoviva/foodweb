
class Grass {

  constructor(pos, plantType) {
  //  this.acceleration = createVector(0, 0.05);
  //  this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.pos = pos.copy();
    this.lifespan = 200;
    this.plantType = plantType;
  //  this.kid = [];
    //this.checkKid = [];
  }

  run() {
  //  this.reproduce();
    this.update();
    this.display();
    //this.reproduce();
  }

  // Method to update plant
  update() {
  //plants need to grow.
    this.lifespan += .1;

}

  // Method to display
  display() {
      push();
      let orgcolor= color(10,200,10);
      orgcolor.setAlpha(this.lifespan);
      translate(this.pos.x,this.pos.y);
      stroke(orgcolor);
      strokeWeight(1);
      line(0,8,0,-8);
      line(0,8,2,-6);
      line(0,8,6,-4);
      line(0,8,8,-1);
      line(0,8,-4,-6);
      line(0,8,-6,-4);
      line(0,8,-8,-1);
    pop();

  }

  //plants reproduce every once in a while.
  reproduce(){
   if (random(1) < .005) {
      let place3 = createVector(random(width),random(height));
      if(world.plants.length<60){
       world.addPlants(place3,this.plantType);
  //     console.log(this.plantType);
     }
  }
}
  // Is the plant still alive?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  getPlants(){
    return this.plants;
  }
}
