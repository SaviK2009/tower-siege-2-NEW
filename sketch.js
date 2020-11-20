const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {

}

function setup() {
    var canvas = createCanvas(1400, 1000);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 780, 1400, 20)
    ground1 = new Ground(500, 500, 500, 20)
    ground2 = new Ground(1000, 300, 400, 20)



    // draw the boxes
    box1 = new Box(430, 461, 50, 50)
    box2 = new Box(480, 461, 50, 50)
    box3 = new Box(530, 461, 50, 50)
    box4 = new Box(580, 461, 50, 50)
    box5 = new Box(550, 410, 50, 50)
    box6 = new Box(380, 461, 50, 50)
    box7 = new Box(405, 410, 50, 50)
    box8 = new Box(450, 410, 50, 50)
    box9 = new Box(500, 410, 50, 50)
    box10 = new Box(425, 360, 50, 50)
    box11 = new Box(475, 360, 50, 50)
    box12 = new Box(525, 360, 50, 50)
    box13 = new Box(450, 310, 50, 50)
    box14 = new Box(500, 310, 50, 50)
    box15 = new Box(475, 260, 50, 50)
    box16 = new Box(900, 261, 50, 50)
    box17 = new Box(950, 261, 50, 50)
    box18 = new Box(1000, 261, 50, 50)
    box19 = new Box(1050, 261, 50, 50)
    box20 = new Box(925, 211, 50, 50)
    box21 = new Box(975, 211, 50, 50)
    box22 = new Box(1025, 211, 50, 50)
    box23 = new Box(950, 161, 50, 50)
    box24 = new Box(1000, 161, 50, 50)
    box25 = new Box(975, 111, 50, 50)
    


    hex = new Hex(135, 415);
    sling = new Sling(hex.body, { x: 140, y: 415 });
}

function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    hex.display();
    sling.display();
    ground1.display();
     ground2.display();
    
     fill("red") 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    fill("blue");
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    fill("purple");
    box10.display();
    box11.display();
    box12.display();
    fill("green")
    box13.display();
    box14.display();
    fill("orange")
    box15.display();
    fill("blue")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    fill("green")
    box20.display();
    box21.display();
    box22.display();
    fill("orange")
    box23.display();
    box24.display();
    fill("purple")
    box25.display();
}
function keyPressed() {

    if (keyCode === 32) {
        Matter.Body.setPosition(hex.body, { x: 400, y: 200 })//changed
        sling.attach(hex.body);
    }
}


function mouseDragged() {
    Matter.Body.setPosition(hex.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    sling.fly();
}

