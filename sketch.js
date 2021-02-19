var canvas;
var music;
var b1,b2,b3,b4,ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
b1=createSprite(0,580,360,30)
b1.shapeColor="blue"
b2=createSprite(295,580,200,30);
b2.shapeColor="green"
b3=createSprite(515,580,200,30);
b3.shapeColor="yellow"
b4=createSprite(740,580,220,30);
b4.shapeColor="red"
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=4
ball.velocityY=5
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(b1.isTouching(ball)&&ball.bounceOff(b1)){
        ball.shapeColor="purple"
        music.play()
    }
    if(b2.isTouching(ball)){
        ball.shapeColor="orange"
        ball.velocityX=0
        ball.velocityY=0
        music.stop()
    }
    if(b3.isTouching(ball)&&ball.bounceOff(b3)){
        ball.shapeColor="grey"
    }
    if(b4.isTouching(ball)&&ball.bounceOff(b4)){
        ball.shapeColor="pink"
    }
    drawSprites()
    //add condition to check if box touching surface and make it box
}
