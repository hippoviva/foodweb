
// Child class constructor
class Muley extends Elk {
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  plantPreference(i){
    if(world.plants[i].plantType==2||world.plants[i].plantType==3||world.plants[i].plantType==4){
    this.health += 100;
    //  console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
  world.plants[i].lifespan-=10;
    }
}
  // Override the display method bright green
  display() {
    push();
    //let orgcolor2= color(15,15,15);
  //  orgcolor2.setAlpha(this.health);
    let orgcolor= color(205,133,63);
    orgcolor.setAlpha(this.health);
    translate(this.pos.x,this.pos.y);
    //rectMode(CENTER);
    //stroke(orgcolor2)
    strokeWeight(1);
    noFill();
    bezier(-10,-15,-5,-5,5,-5,10,-15);
    bezier(-15,-15,-5,-5,5,-5,15,-15);
    fill(orgcolor);
    ellipse(0,0,10,18);
    ellipse(0,7,6,6);
    ellipse(-7,-7,8,4);
    ellipse(7,-7,8,4);

    fill(255,this.health);
    ellipse(3,-2,4,5);
    ellipse(-3,-2,4,5);
    fill(0,this.health);
    ellipse(3,-2,1,1);
    ellipse(-3,-2,1,1);
    pop();
  }
}
class Hare extends Elk {
  //override plant preference
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  plantPreference(i){
    if(world.plants[i].plantType==4||world.plants[i].plantType==5||world.plants[i].plantType==6){
    this.health += 100;
    //  console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
  world.plants[i].lifespan-=10;
    }
}
  // Override the display method color red
  display() {
    let orgcolor= color(255,228,225);
    push();
    rectMode(CENTER);
    orgcolor.setAlpha(this.health);
    fill(orgcolor);
    noStroke();
    //stroke(255, this.lifespan);
    //strokeWeight(1);
  //  push();
    translate(this.pos.x, this.pos.y);

    ellipse(0,0,16,16);
    ellipse(-4,-10,5,15);
    ellipse(4,-10,5,15);
    fill(0,this.health);
    ellipse(-4,-2,3,3);
    ellipse(4,-2,3,3);
    triangle(-3,0,0,3,3,0);
    pop();
  }



}
class Beaver extends Elk {
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)

  // Override the display method
  display(){
    push();
    let orgcolor= color(205,133,63);
    orgcolor.setAlpha(this.health);
    fill(orgcolor);
    translate(this.pos.x,this.pos.y);
    strokeWeight(1);
    rectMode(CENTER)
    stroke(0,this.health)
    ellipse(-6,-7,3,5);
    ellipse(6,-7,3,5);
    ellipse(0,-1,18,14);
    ellipse(0,1,5,5);
    ellipse(-3,1,5,5);
    ellipse(3,1,5,5);
    ellipse(0,-1,5,5);
    fill(255,this.health);
    rect(-2,5,4,6);
    rect(2,5,4,6);
    ellipse(-3,-4,3,3);
    ellipse(3,-4,3,3);
      pop();

}
}
class Mouse extends Elk {

  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
    plantPreference(i){
    if(world.plants[i].plantType==4||world.plants[i].plantType==5||world.plants[i].plantType==6){
    this.health += 100;
  //    console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
  world.plants[i].lifespan -= 10;
    }
}

  // Override the display method color yellow
  display(){
    push();
    let orgcolor= color(119,136,153);
    orgcolor.setAlpha(this.health);
    fill(orgcolor);
    translate(this.pos.x,this.pos.y);
    noStroke();
    ellipse(0,4,12,12);
    ellipse(-5,-4,7,7);
    ellipse(5,-4,7,7);
    fill(0,this.health);
    ellipse(-2,3,2,2);
    ellipse(2,3,2,2);
    ellipse(0,6,2,2);

    pop();

}
}

class Chipmunk extends Elk {
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  plantPreference(i){
    if(world.plants[i].plantType==4||world.plants[i].plantType==5||world.plants[i].plantType==6){
    this.health += 100;
  //    console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
  world.plants[i].lifespan -=10;
    }
  }
  // Override the display method - color hot pink
  display(){
    push();
    let orgcolor2= color(15,15,15);
    orgcolor2.setAlpha(this.health);
    let orgcolor= color(205,133,63);
    orgcolor.setAlpha(this.health);
    fill(orgcolor);
    translate(this.pos.x,this.pos.y);
    noStroke();
    ellipse(7,-5,10,6);
    rotate(-PI/4);
    ellipse(-2,0,20,10);
    ellipse(7,-5,4,5);
    stroke(orgcolor2);
    ellipse(8,0,2,2);
    bezier(4,-3,2,-3,-5,-5,-10,-1);
    bezier(4,-1,2,-2,-5,-3,-10,1);
    rotate(PI/6);
    ellipse(-10,-2,3,12);
    pop();

}
}
class Coyote extends Elk {
  //overide plantPreference
  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  // An animal can find food and eat it
    eat() {
      let food = world.animals;
      // Are we touching any food objects?
      for (let i = food.length - 1; i >= 0; i--) {
      let foodLocation = food[i].pos;
      let d = p5.Vector.dist(this.pos, foodLocation);
        // If we are, and if we eat that plant, get some health!
        if (d < this.r) {
        //  console.log("going to plant preference");
          this.animalPreference(i);
      //    if(food[i].plantType==1||food[i].plantType==2){
      //    this.health += 100;
      //  world.plants.splice(i, 1);
          }
        }
      }
      //overide plantPreference
      //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
//Elk 1 , Muley2, hare3, beaver 4,mouse 5, chip 7, coyote 6, wolf 8
    animalPreference(i){
      if(world.animals[i].animalType==3||world.animals[i].animalType==3||world.animals[i].animalType==4||world.animals[i].animalType==5){
      this.health += 50;
  //    console.log(this.constructor.name+" ate "+world.animals[i].constructor.name);
    world.animals[i].health-=500;
  }
    }

  // Override the display method - color hot pink
  display(){
    push();
    let orgcolor2= color(15,15,15);
    orgcolor2.setAlpha(this.health);
    let orgcolor= color(205,133,63);
    orgcolor.setAlpha(this.health);
    fill(orgcolor);
    noStroke();
    translate(this.pos.x,this.pos.y);
    rectMode(CENTER);
    stroke(orgcolor2)
    triangle(0,10,-10,-5,10,-5);
    triangle(-10,-5,-5,2,-12,5);
    triangle(10,-5,5,2,12,5);
    fill(orgcolor2);
    ellipse(-3,-1,3,3);
    ellipse(3,-1,3,3);
    ellipse(0,7,5,5);
      pop();

}
}
class Wolf extends Elk {
  //overide plantPreference

  //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  // An animal can find food and eat it
    eat() {
      let food = world.animals;
      // Are we touching any food objects?
      for (let i = food.length - 1; i >= 0; i--) {
      let foodLocation = food[i].pos;
      let d = p5.Vector.dist(this.pos, foodLocation);
        // If we are, and if we eat that plant, get some health!
        if (d < this.r) {
        //  console.log("going to plant preference");
          this.animalPreference(i);
      //    if(food[i].plantType==1||food[i].plantType==2){
      //    this.health += 100;
      //  world.plants.splice(i, 1);
          }
        }
      }
      //overide plantPreference
      //pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
//Elk 1 , Muley2, hare3, beaver 4,mouse 5, chip 7, coyote 6, wolf 8
    animalPreference(i){
      if(world.animals[i].animalType==1||world.animals[i].animalType==6){
      this.health += 50;
    //  console.log(this.constructor.name+" ate "+world.animals[i].constructor.name);
    world.animals[i].health-=500;
  }
    }

  // Override the display method - color hot pink
  display(){
  let orgcolor= color(155,50,50);
  push();
  rectMode(CENTER);
  orgcolor.setAlpha(this.health);
  fill(orgcolor);
  noStroke();
  translate(this.pos.x,this.pos.y);
  rotate(PI/4);
  rect(0,0,16, 16);
  fill(0,this.health);
  ellipse(-4,0,3,3);
  ellipse(0,-4,3,3);
  ellipse(0,0,3,3);
  triangle(-3,-8,0,-16,3,-8);
  triangle(-8,-3,-16,0,-8,3);
  triangle(0,5,0,0,5,0);


  pop();
}
}
