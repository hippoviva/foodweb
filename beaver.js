
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
    
    push();
    if (this.health>500){
  image(imgbun,this.pos.x, this.pos.y);
}else{
 image(imgbundead,this.pos.x, this.pos.y);
}
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
   image(imgchip,this.pos.x, this.pos.y);
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
  
  push();
  
  if (this.health>200){
  image(imgwolf,this.pos.x, this.pos.y);
}else{
 image(imgwolfdead,this.pos.x, this.pos.y);
}

  pop();
}
}
