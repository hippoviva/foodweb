

let world;
let stop = "false";
//let pineOn="On",aspenOn="On",willowOn="On",sageOn="On",grassOn="On",forbesOn="On";
let stopButt,wolfButt,coyoteButt,foxButt,elkButt,muleyButt,hareButt, beaverButt, mouseButt, chipButt;




function setup() {
  createCanvas(600, 400);
  l = createVector(random(width),random(height));
  num = 60;

  //Kinda Pause Button
//  stopButton = document.getElementById("pause");
//  stopButton.addEventListener("mousedown",pause)
//Turn off plant type creation or reproduction
//  wolfButt = document.getElementById("wolfbtn");
//  wolfButt.addEventListener("mousedown",wolfToggle);
//  coyoteButt = document.getElementById("coyotebtn");
//  coyoteButt.addEventListener("mousedown", coyoteToggle);
//  foxButt = document.getElementById("foxbtn");
//  foxButt.addEventListener("mousedown",foxToggle);
//  elkButt = document.getElementById("elkbtn");
//  elkButt.addEventListener("mousedown", elkToggle);
//  muleyButt = document.getElementById("muleybtn");
//  muleyButt.addEventListener("mousedown",muleyToggle);
//  hareButt = document.getElementById("harebtn");
//  hareButt.addEventListener("mousedown", hareToggle);
//  beaverButt = document.getElementById("beaverbtn");
//  beaverButt.addEventListener("mousedown", beaverToggle);
//  mouseButt = document.getElementById("mousebtn");
//  mouseButt.addEventListener("mousedown", mouseToggle);
//  chipButt = document.getElementById("chipbtn");
//  chipButt.addEventListener("mousedown", wolfToggle);
 wolfAddButt = document.getElementById("wolfAddBtn");
 wolfAddButt.addEventListener("mousedown", wolfAddToggle);


      // }
  world = new World(l,num);
//  stopButton.mousePressed(pause);
}


function draw() {
  background(200);
  var fps = frameRate();
  text("FPS: "+fps.toFixed(0),20,height - 10);
  //var vali = stop;
  //console.log(vali);
//  world.addPlants();
if (stop=="false"){
  world.runPlant();
  world.runAnimal();
  world.getAnimalTotals();

}
}
