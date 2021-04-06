const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var drop
var drops=[]
var maxDrops=100;


function preload(){
    
}

function setup(){
   createCanvas(500,650)

   engine = Engine.create();
   world = engine.world;

   drop=new Drop(250,325)
    
}

function draw(){
 
    Engine.update(engine);

    background(0);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }

    

    drop.display();

}   

