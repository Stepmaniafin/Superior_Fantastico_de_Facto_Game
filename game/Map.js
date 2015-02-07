// Map file, where we create the play area
var offsetX = 0;
var offsetY = 0;
var nx = 0;
var ny = 0;
var nx_old = -1;
var ny_old = -1
var mapHeight=480;
var mapWidth=648;
var playerSpawnY, playerSpawnX, bornX, bornY;
var fps = 60;
//This function is used @ Game.js ~line 11 for defining the image drawing,
//so that we draw stuff that we can see and don't draw stuff that is outside our vision.
//This makes your FPS rise like an angel! 
function missa(){
  nx = Math.abs(offsetX/648);
  ny = Math.abs(offsetY/480);
  if (ny != ny_old || nx != nx_old){
    if (ny_old != -1){
      for (i=ny_old*20;i<ny_old*20+20;i++){
        for (j=nx_old*27;j<nx_old*27+27;j++){
          if(rendered_map[i][j] == "123123123255"){
          rendered_map[i][j] = "0000"; 
          } 
        }
      }
    }     
    for(i=0;i<basicMobs.length;i++) {
      rendered_map[Math.floor(basicMobs[i].y/tileWidth)][Math.floor(basicMobs[i].x/tileHeight)] = "123123123255";
    }
    ny_old = ny;
    nx_old = nx;
    basicMobs = [];
    blocks = [];
    needles = [];
    for (i=ny*20;i<ny*20+20;i++){
      for (j=nx*27;j<nx*27+27;j++){
        if(rendered_map[i][j]=="25500255"){
          addBlock("block", j*tileHeight,i*tileWidth);
        } 
        if(rendered_map[i][j] == "123123123255"){
          if(rendered_map[i][j-1] == "25500255" || rendered_map[i][j-1] == "02550255"){
            createBasicMob("basicmob",j*tileHeight,i*tileWidth, "right");
          }
          else if(rendered_map[i][j+1] == "25500255" || rendered_map[i][j+1] == "02550255"){
            createBasicMob("basicmob",j*tileHeight,i*tileWidth, "left");  
          }
          else {
            randomboolean = Math.random() >= 0.5;
            if(randomboolean){
              createBasicMob("basicmob",j*tileHeight,i*tileWidth, "right");
            }
            else{
              createBasicMob("basicmob",j*tileHeight,i*tileWidth, "left");
            }    
          } 
        } 
        if(rendered_map[i][j] == "02550255"){
          addNeedle("needle",j*tileHeight,i*tileWidth);
        }
      }
    }
  }
}

function drawMap(map){
  
  rendered_map = map;
  //Make rendered_map variable, that changes when player y is > 0, x > something etc.,
  //Example: rendered_map = map1 when game begins, rendered_map = map2 when playerX = 640.
  //This way you can change map1.length, map1 etc to rendered_map, which changes over time
  //without you need to care about that!
    for (var x = 0; x < rendered_map.length; x++) {
        for (var y = 0; y < rendered_map[x].length; y++) {
            
            if(rendered_map[x][y] == "255255255255"){
              addGoal("goal",y*tileHeight,x*tileWidth); 
            }
            if(rendered_map[x][y] == "2550255255"){
              lippuset.push(y*tileHeight+"|"+x*tileWidth); 
            }            
            else if(rendered_map[x][y] == "00255255"){
            
              bornY = playerSpawnY = y*tileHeight;
              bornX = playerSpawnX = x*tileWidth;
              createEntity("hero",playerSpawnY,playerSpawnX);
            }
            else if(rendered_map[x][y] == "000255"){
              loseY = y*tileHeight;
              loseX = x*tileWidth;
            }
            else if(rendered_map[x][y] == "2550200255"){
              winY = y*tileHeight;
              winX = x*tileWidth;
            }
        }
    }
}

function chooseDrawArea(){
  var xmodulo = entitys[0].x/mapWidth;
  var ymodulo = entitys[0].y/mapHeight;
  
  if(entitys[0].x > mapWidth){
    offsetX = -mapWidth*Math.floor(xmodulo);
  }
  else if(entitys[0].x < mapWidth){
    offsetX = 0;
  }
  if(entitys[0].y > mapHeight){
    offsetY = -mapHeight*Math.floor(ymodulo);
  }
  else if(entitys[0].y < mapHeight){
    offsetY = 0;
  }
}