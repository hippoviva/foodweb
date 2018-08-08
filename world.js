//

class World {

  constructor(pos,num) {
    this.plants = [];
    this.setUpPlants(num);
    this.animals = [];
    this.setUpAnimals(num);
    this.num=num;
    //this.p1=pos;

    //
  }
//set up the initial plants
setUpPlants(num){
  let plantType=1;
for (var i=0; i<num; i++){
  let place = createVector(random(width), random(height));
  this.addPlants(place,plantType);
  if (plantType > 5){
    plantType = 1;
  }else{
  plantType +=1;
}
}
}
//make each kind of plant
//pine(1), aspen(2), willow(3), sage(4), grass(6), forbes(5)
  addPlants(place2,pt) {
    switch(pt){
    case (this.pt=1):
  //  if(document.getElementById("pinebtn").textContent == "On"){

//    }
  if(this.p1<20||this.p1===undefined){//console.log("making"+this.p1);
  this.plants.push(new Pine(place2,this.pt));
}
      break;
    case (this.pt=2):
//    if(document.getElementById("aspenbtn").textContent == "On"){
    this.plants.push(new Aspen(place2,this.pt));
  //  }
    break;
    case (this.pt=3):
//    if(document.getElementById("willowbtn").textContent == "On"){
    this.plants.push(new Willow(place2,this.pt));

//    }
    break;
    case (this.pt=4):
//    if(document.getElementById("sagebtn").textContent == "On"){
    this.plants.push(new Sagebrush(place2,this.pt));
//    }
    break;
    case (this.pt=5):
//    if(document.getElementById("forbesbtn").textContent == "On"){
    //if(this.f<20){
    if(this.f1<20||this.f1===undefined){//console.log("making"+this.p1);
    this.plants.push(new Forbes(place2,this.pt));
}
    //}
  //  console.log(this.f);
    break;
    case (this.pt=6):
if(this.g1<20||this.g1===undefined){//console.log("making"+this.p1);
  //  if(document.getElementById("grassbtn").textContent == "On"){
    this.plants.push(new Grass(place2,this.pt));
}
    break;

    default:
    this.plants.push(new Grass(place2,this.pt));
    break;
    }
  }

  setUpAnimals(num){
    let numb = num/3;
    let animalType=1;
  for (var i=0; i<numb; i++){
      let anplace = createVector(random(width), random(height));
    this.addAnimals(anplace,animalType);
    if (animalType > 6){
      animalType = 1;
    }else{
    animalType +=1;
  }
  //   console.log(this.animalType);
  }
  }
  //make each kind of animal
  //Elk 1 , Muley2, hare3, beaver 4,mouse 5, chip 7, coyote 6, wolf 8

    addAnimals(place2,at) {
      switch(at){
      case (this.at=1):
    //  if(document.getElementById("elkbtn").textContent == "On"){
      this.animals.push(new Elk(place2,at));
    //  }
      break;
      case (this.at=2):
    //  if(document.getElementById("muleybtn").textContent == "On"){
      this.animals.push(new Muley(place2,at));
  //    }
      break;
      case (this.at=3):
    //  if(document.getElementById("harebtn").textContent == "On"){
      this.animals.push(new Hare(place2,at));
  //    }
      break;
      case (this.at=4):
    //  if(document.getElementById("beaverbtn").textContent == "On"){
      this.animals.push(new Beaver(place2,at));
  //    }
      break;
      case (this.at=5):
    //  if(document.getElementById("mousebtn").textContent == "On"){
      this.animals.push(new Mouse(place2,at));
    //  }
      break;
      case (this.at=7):
    //  if(document.getElementById("chipbtn").textContent == "On"){
      this.animals.push(new Chipmunk(place2,at));
    //  }
      break;
      case (this.at=6):
    //  if(document.getElementById("coyotebtn").textContent == "On"){
      this.animals.push(new Coyote(place2,at));
    //  }
      break;
      case (this.at=8):
    //  if(document.getElementById("wolfbtn").textContent == "On"){
      this.animals.push(new Wolf(place2,at));
    //  }
      break;
      default:
      this.animals.push(new Chipmunk(place2,at));
      break;
      }
    }
  runPlant() {

    // Run every plant
    for (var i = this.plants.length-1; i>=0; i-- ){
      this.plants[i].run();
      this.plants[i].reproduce();
    }

    // Filter removes any elements of the array that do not pass the test
    this.plants = this.plants.filter(plant => !plant.isDead());


      //  console.log(this.constructor.name+" ate "+world.plants[i].constructor.name);
    document.getElementById("totA").textContent = "Animals= "+world.animals.length;
    document.getElementById("totP").textContent = "Plants = "+world.plants.length;

  }
  runAnimal() {

    // every animal runs, reproduces and eats.
    for (var i = this.animals.length-1; i>=0; i-- ){
    this.animals[i].run();
    this.animals[i].eat();
    this.animals[i].reproduce();
    //console.log (this.animals[i].constructor.name);

    }

    // Filter removes any elements of the array that do not pass the test
    this.animals = this.animals.filter(animal => !animal.isDead());
  }
  //Run every animal

  getAnimalTotals(){
    let e=0, md=0,r=0, b=0, m=0,c=0, coy=0, wf=0;
    for (var i = this.animals.length-1; i>=0; i-- ){
      if (this.animals[i].constructor.name=="Elk")e+=1;
      if (this.animals[i].constructor.name=="Muley")md+=1;
      if (this.animals[i].constructor.name=="Hare")r+=1;
      if (this.animals[i].constructor.name=="Beaver")b+=1;
      if (this.animals[i].constructor.name=="Mouse")m+=1;
      if (this.animals[i].constructor.name=="Chipmunk")c+=1;
      if (this.animals[i].constructor.name=="Coyote")coy+=1;
      if (this.animals[i].constructor.name=="Wolf")wf+=1;
    }
    document.getElementById("totAn1").textContent = "Elk = "+e+" Mule Deer = "+md+" Hare = "+r;
    document.getElementById("totAn2").textContent = "Beaver = "+b+" Mouse = "+m+" Chipmunk = "+c;
    document.getElementById("totCarn").textContent = "Coyote = "+coy+ "  Wolf = "+wf;

   let p=0, a=0, w=0, s=0, g=0, f=0;
    for (var i = this.plants.length-1; i>=0; i-- ){
      if (this.plants[i].constructor.name=="Pine")p+=1;
      if (this.plants[i].constructor.name=="Aspen")a+=1;
      if (this.plants[i].constructor.name=="Willow")w+=1;
      if (this.plants[i].constructor.name=="Sagebrush")s+=1;
      if (this.plants[i].constructor.name=="Grass")g+=1;
      if (this.plants[i].constructor.name=="Forbes")f+=1;

    }
    document.getElementById("totPl1").textContent = "Pine = "+p+" Aspen = "+a+" Willow = "+w;
    document.getElementById("totPl2").textContent = "Sage = "+s+" Grass = "+g+" Forbes = "+f;
    this.p1=p;
    this.f1=f;
    this.g1=g;


  }
}
