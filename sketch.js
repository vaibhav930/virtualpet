//Create variables here
var dog , happyDog,dogImage ;
var database , foods, foodStock;





function preload()
{
  dogImage = loadImage("dogImg.png")
  happyDog= loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);

  dog = createSprite(250,250)
  dog.addImage(dogImage)
  dog.shapeColor("red")

  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
  textSize (40)
fill("yellow")
if(keyWentDow(UP_ARROW)){
writeStock(foods)
dog.addImage(happyDog)
}

drawSprites();
  text("Note-press UP arrow key to feed tom milk",250, 450)
}

function readStock(data){
foods=data.val();


}
function writeStock(x){
database.ref('/').update({
Food:x
})
}

