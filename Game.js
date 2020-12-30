class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car1.addImage("car1",car1I)
    car2=createSprite(300,200)
    car2.addImage("car2",car2I)
    car3=createSprite(500,200)
    car3.addImage("car3",car3I)
    car4=createSprite(700,200)
    car4.addImage("car4",car4I)
    cars=[car1,car2,car3,car4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      image(trackI,0,-displayHeight*4,displayWidth,displayHeight*5)
      var display_position = 130;
      var x = 300;
      var y = 0;
      var index = 0;
      var carIndex = 0;
      for(var plr in allPlayers){
        carIndex=index;
        index+=1;
        x+=250
        y=displayHeight-allPlayers[plr].distance-100
        console.log(x+","+y+","+carIndex+","+index)
        cars[carIndex].x=x;
        cars[carIndex].y=y;
        if (plr === "player" + player.index){
        cars[carIndex].shapeColor="blue"
        camera.position.x=displayWidth/2;
        camera.position.y=cars[carIndex].y;
        }

//        display_position+=20;
//        textSize(15);
//        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>=5100){
      console.log("Game Over");
      gameState=2;
      this.update(2);
    }
        drawSprites()
  }
    end(){
      console.log("Game Over");
    //  alert("game over")
    //  swal
    }
}
// option