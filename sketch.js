//creating variables
var dogimg, happyDogimg,dog,happpyDog
var database, foodS, foodStock
//loading image....
function preload()
{
	dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
foodStock=database.ref("food");
foodStock.on("value",readStock);
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.5;
}


function draw() {
   background(46,139,87);
   if(keyWentDown(UP_ARROW)){ 
     writeStock(foodS);
     dog.addImage(happyDogimg); 
    }
      fill(255,255,254);
      stroke("black");
       text("Food remaining : "+foodS,170,200); 
       textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
drawSprites(); 
 }

//function to read values from DB
function readStock(data){
  foodS=data.val();
}
//functions to write values in DB
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}