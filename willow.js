
// Child class constructor
class Willow extends Grass {

  // Override the display method COLOR bright green
  display() {
    push();
  let orgcolor= color(30,200,10);
   let orgcolor2= color(139,69,19);
  // orgcolor2.setAlpha(this.lifespan);
  //  orgcolor.setAlpha(this.lifespan);
   fill(orgcolor);
   translate(this.pos.x, this.pos.y);
   stroke(20,this.lifespan);
   strokeWeight(1);
   bezier(0,0,4,-15,10,-15,8,8);
   bezier(0,0,-4,-15,-10,-15,-8,8);
   bezier(0,0,-2,-10,-8,-10,-5,6);
   bezier(0,0,2,-10,8,-10,5,10);
   strokeWeight(2);
   line(0,0,0,9);
    pop();
  }
}
class Aspen extends Grass {

  // Override the display method color RED
  display() {

    push();
    let orgcolor2= color(255,215,215);
    orgcolor2.setAlpha(this.lifespan);
    let orgcolor= color(50,205,50);
    orgcolor.setAlpha(this.lifespan);
    fill(orgcolor);
    translate(this.pos.x,this.pos.y);
    stroke(orgcolor2);
    strokeWeight(1);
    ellipse(0,-12,15,15);
    ellipse(-5,-5,10,15);
    ellipse(5,-5,10,15);
    bezier(1,1,2,-1,2,-5,-10,0);
    bezier(1,1,2,-1,2,-5,10,0);
    bezier(0,-8,2,-5,5,-8,8,-10);
    bezier(0,-8,-2,-5,-5,-8,-8,-10);
    bezier(1,10,1,1,-1,-1,0,-15);
    ellipse(0,-15,2,2);
    strokeWeight(2);
    line(0,0,0,9);
    pop();
  }
}
class Pine extends Grass {

  // Override the display method  COLOR ORANGE
  display(){
 
  push();
    image(imgpine,this.pos.x,this.pos.y);
    
    pop();
}
}
class Sagebrush extends Grass {

  // Override the display method COLOR yellow
  display(){
    push();
    image(imgsage,this.pos.x,this.pos.y);
    pop();
}
}

class Forbes extends Grass {

  // Override the display method - color hot pink
  display(){
    push();
    let orgcolor2= color(200,10,0);
    orgcolor2.setAlpha(this.lifespan);
    let orgcolor= color(200,200,10);
    orgcolor.setAlpha(this.lifespan);
    fill(orgcolor);
    translate(this.pos.x,this.pos.y);
    stroke(100,this.health);
    strokeWeight(1);
    ellipse(0,0,8,8);
    strokeWeight(1);
    stroke(orgcolor2);
    ellipse(0,-6,4,4);
    ellipse(-6,0,4,4);
    ellipse(-4,-5,4,4);
    ellipse(-4,4,4,4);
    ellipse(6,0,4,4);
    ellipse(4,-5,4,4);
    ellipse(4,4,4,4);
    ellipse(0,5,4,4);
    stroke(0,this.health)
    line(0,6,0,12);
  pop();
}

}
