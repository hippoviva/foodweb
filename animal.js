// Finch class

// Create a "bloop" creature
class Elk {
  constructor(l,animalType) {
    this.pos = l.copy(); // Location
    this.health = 300; // Life timer
    this.xoff = random(1000); // For perlin noise
    this.yoff = random(1000);
    this.maxspeed = 2;
    this.animalType = animalType;
    this.orgtype = color(255,1,1);
    this.r = 20;
  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

// An animal can find food and eat it
  eat() {
    let food = world.plants;
    // Are we touching any food objects?
    for (let i = food.length - 1; i >= 0; i--) {
    let foodLocation = food[i].pos;
    let d = p5.Vector.dist(this.pos, foodLocation);
      // If we are, and if we eat that plant, get some health!
      if (d < this.r) {
            this.plantPreference(i);
        }
      }
    }
    //overide plantPreference
    //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  plantPreference(i){
    if(world.plants[i].plantType==1||world.plants[i].plantType==2||world.plants[i].plantType==3){
    this.health += 5;
    //  console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
  world.plants[i].lifespan-=5;
}
  }

  // At any moment there is a teeny, tiny chance a bloop will reproduce
  //and the parent must have some health.
  reproduce(){
   if (random(1) < .001) {
      let place3 = createVector(random(width),random(height));
      if(world.animals.length<25){
      place3 = this.pos;
       world.addAnimals(place3,this.animalType);
      //console.log(this.constructor.name+" reproduced ");
     }
  }
}
  // Method to update position
  update() {
    // Simple movement based on perlin noise
    let vx = map(noise(this.xoff), 0, 1, -this.maxspeed, this.maxspeed);
    let vy = map(noise(this.yoff), 0, 1, -this.maxspeed, this.maxspeed);
    let velocity = createVector(vx, vy);
    this.xoff += 0.01;
    this.yoff += 0.01;
    this.pos.add(velocity);
    // Death always looming
    this.health -= .1;
  }

  // Wraparound
  borders() {
    if (this.pos.x < -this.r) this.pos.x = width;
    if (this.pos.y < -this.r) this.pos.y = height;
    if (this.pos.x > width + this.r) this.pos.x = -this.r;
    if (this.pos.y > height + this.r) this.pos.y = -this.r;
  }

  // Method to display
  display() {
    push();
    let orgcolor = color(205,133,63);
    orgcolor.setAlpha(this.health);
    translate(this.pos.x, this.pos.y);
    strokeWeight(2);
    fill(0,this.health);
    bezier(0,-12,5,-10,12,-10,15,-20);
    bezier(0,-12,-5,-10,-12,-10,-15,-20);
    line(-10,-15,-10,-20);
    line(10,-15,10,-20);
    line(-7,-13,-7,-20);
    line(7,-13,7,-20);
    strokeWeight(1);
    fill(orgcolor);
    ellipse(0,0,14,20);
    ellipse(-2,4,1,1);
    ellipse(2,4,1,1);
    ellipse(-7,-7,6,4);
    ellipse(7,-7,6,4);
    fill(0,this.health);
    triangle(0,8,-4,4,4,4);
    ellipse(3,-2,2,3);
    ellipse(-3,-2,2,3);
    pop();

  }

  // Death
  isDead() {
    if (this.health < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
