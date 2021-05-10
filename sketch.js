const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var groundObj;
var div = [];
var plinko = [];
var particle;
var engine, world;
var gameCount = 0;
var gameState = "PLAY"
var score = 0;

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  groundObj = new Ground(240, 595, 480, 25);
  for (var k = 0; k <=width; k = k + 80) { 
    div.push(new Division(k, height-300/2, 10, 300)); 
  }

  for (var k = 50; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 50)); 
  }

  for (var k = 25; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 150)); 
  }

  for (var k = 50; k <=width - 50; k = k + 70) { 
    plinko.push(new Plinko(k, 225)); 
  }


}

function draw() {
  background("black");  
  Matter.Engine.update(engine);
  groundObj.display();
  for(var k = 0; k < div.length; k++){
    div[k].display();
    }
    for(var k = 0; k < plinko.length; k++){
      plinko[k].display();
      }

      //if(frameCount%60 === 0){
        //particle.push(new Particle(random(10, 460), 0));
        //}

      //for(var k = 0; k < particle.length; k++){
        
        //}


        textSize(25);
        text("Score : "+score,20,40); 
        fill("white"); 
        //text(mouseX + "," + mouseY, 20, 50); 
        textSize(35);
        text(" 500 ", 5, 550); 
        text(" 500 ", 80, 550); 
        text(" 100 ", 160, 550); 
        text(" 100 ", 240, 550);
        text(" 200 ", 320, 550); 
        text(" 200 ", 400, 550);

      if(particle != null){
        particle.display();
        if (particle.body.position.y > 500) {
        if (particle.body.position.x < 150 && particle.body.position.x > 0){
          score = score + 500;
          particle = null
        }

        else if(particle.body.position.x > 160 && particle.body.position.x < 310){
          score = score + 100
          particle = null
        }

        else if(particle.body.position.x > 315 && particle.body.position.x < 600){
          score = score + 200
          particle = null
        }
        }
      }

       if (gameCount === 5){
         gameState = "END"
       }

       if (gameState === "END") {
         textSize(35);
         text("GAMEOVER", 200, 300)
       }
}

function keyPressed(){

  if (gameState === "PLAY"){
    particle = new Particle(mouseX, 10);
    gameCount = gameCount + 1
  }

}
