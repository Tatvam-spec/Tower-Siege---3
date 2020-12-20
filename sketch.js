const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(500, 305, 300, 170);
   // Top level
    block = new Block(390,155,30,40);
   // Second level
    block2 = new Block(420,195,30,40);
    block3 = new Block(390, 195, 30, 40);
    block4 = new Block(360,195,30, 40);
   // Third level
    block5 = new Block(450, 230, 30, 40);
    block6 = new Block(420, 230, 30, 40);
    block7 = new Block(390, 230, 30, 40);
    block8 = new Block(360, 230, 30, 40);
    block9 = new Block(330, 230, 30, 40);
   // Fourth level
    blog10 =  new Block(300, 265, 30, 40);
    block11 = new Block(330, 265, 30, 40);
    block12 = new Block(360, 265, 30, 40);
    block13 = new Block(390, 265, 30, 40);
    block14 = new Block(420, 265, 30, 40);
    block15 = new Block(450, 265, 30, 40);
    Block16 = new Block(480, 265, 30, 40);
    polygon = new Polygon(200,50);
   
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

   noStroke();
   tetSize(35)
   fill("white")
   text("Score" + score, width-300, 50)


    Engine.update(engine);
    //strokeWeight(4);
    block.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    ground.display();
    ground2.display();

    polygon.display();
    slingshot.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

score(){
    if(this.visibility<0 && this.visibility>-105){
       score++;
    }
} 
