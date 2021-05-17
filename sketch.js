var hr, min, sec;
var scAngle, hrAngle, minAngle;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
    textSize(18);
    noStroke();
    fill("blue");
    text("12", 190,90);

    noStroke();
    fill("blue");
    text("3", 310,205);

    noStroke();
    fill("blue");
    text("9", 80,205);

    noStroke();
    fill("blue");
    text("6", 195,310);
    
    translate(200,200)
    rotate(-90)

  hr = hour();
  min = minute();
  sec = second();
console.log(hr);
  
  

  //drawing sec hand
  scAngle = map(sec, 0 , 60, 0, 360);
  push();
  rotate(scAngle);
  stroke ("red");
  strokeWeight (7);
  line (0, 0, 30, 0);
  pop ();


  //drawing Min hand
  minAngle = map(min, 0 , 60, 0, 360);
  push();
  rotate(minAngle);
  stroke ("purple");
  strokeWeight (7);
  line (0, 0, 60, 0);
  pop ();

    //drawing Hour hand
    hrAngle = map(hr%12, 0 , 12, 0, 360);
    push();
    rotate(hrAngle);
    stroke ("cyan");
    strokeWeight (7);
    line (0, 0, 90, 0);
    pop ();

//drawing the arcs
strokeWeight(2);
noFill();
//Seconds
strokeWeight(7);
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);
//Minutes
strokeWeight(7);
stroke(0,255,0);
arc(0,0,280,280,0,minAngle);
//Hour
strokeWeight(7);
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);

  

  //drawSprites();
}