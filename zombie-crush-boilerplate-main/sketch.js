const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base1,b2;
var bridge;
var lnk;
var stone = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(125,windowHeight-125,250,250);
  b2 = new Base(windowWidth-125,windowHeight-125,250,250);
  bridge = new Bridge(25,{x:200,y:540});
  lnk = new Link(bridge,b2);
 // s = new Stone(windowWidth/2,10,100);

 for (let i = 0; i <= 8; i++) {
  var x = random(width/2 - 50/ width/2+200);
  var y = random(-10,140);
  var s = new Stone(x,y,100);
  stone.push(s);
  }

}

function draw() {
  background(51);
  Engine.update(engine);
  base1.show();
  b2.show();
  bridge.show();
 // s.show();
  for (let  st of stone) {
    st.show();
    
  }

 
  
}
