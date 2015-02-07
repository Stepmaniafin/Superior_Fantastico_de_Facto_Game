//Here we make a new "Game", add it to canvas and draw images to it (tiles, player, etc.)
function Startup(){
  setInterval(GameRender, 1000/60);
  drawMap(rendered_map);
}


//Here we draw all the things we want inside the game...* 
function Game(){
  ctx.save();
  //chooseDrawArea, missa, translate & clearRect all have something to do with
  //the camera movement & what player can see (new area comes visible when player
  //goes to the next area)
  chooseDrawArea();
  missa();
  ctx.translate(offsetX, offsetY);
  ctx.clearRect(-offsetX, -offsetY, mapWidth, mapHeight);
  ctx.drawImage(bgImage,Math.abs(offsetX),Math.abs(offsetY),mapWidth,mapHeight,Math.abs(offsetX),Math.abs(offsetY),mapWidth,mapHeight);
  //ctx.drawImage(info_tausta,mapWidth-168-offsetX,24-offsetY);

  animation(heroImage, heroWidth, 0, heroWidth, heroHeight, entitys[0].x, entitys[0].y, heroWidth, heroHeight);  
  
  for (i=ny*20;i<ny*20+20;i++){
    for (j=nx*27;j<nx*27+27;j++){
        if(rendered_map[i][j]=="25500255"){
          ctx.drawImage(blockImage,j*24,i*24);
        }
        else if (rendered_map[i][j]=="02550255") {
          ctx.drawImage(needleImage,j*24,i*24);
        }
        else if (rendered_map[i][j]=="0255255255") {
          ctx.drawImage(blockImage,j*24,i*24);
        }
        
        else if (rendered_map[i][j]=="2550255255") {
          ctx.drawImage(checkpointImage,j*24,i*24-24);
        }
        else if (rendered_map[i][j]=="255255255255") {
          ctx.drawImage(goalImage,j*24-48,i*24-72);
        }
        else if (rendered_map[i][j]=="2552550255") {
          ctx.drawImage(coinImage,j*24,i*24);
        } 
        else if (rendered_map[i][j]=="1257525255" && collision==false) {
          ctx.drawImage(hiddenBlockImage,j*24,i*24);
        }
        if(rendered_map[i][j]=="0255255255" && collision==false){
          ctx.drawImage(fakeBlockImage,j*24,i*24);
        }                         
      }
    }
         
    for(i=0;i<basicMobs.length;i++) {
      if (basicMobs[i].facing == "left"){
        ctx.drawImage(basicMobImage,0,24,24,24,basicMobs[i].x,basicMobs[i].y,24,24);
      }
      else if (basicMobs[i].facing == "right"){
        ctx.drawImage(basicMobImage,0,0,24,24,basicMobs[i].x,basicMobs[i].y,24,24);
      }      
    }
    
    if(show_check){
      for(i=0;i<checks.length;i++) {
        ctx.drawImage(check_tileImage,checks[i].x,checks[i].y);
      }
    }
    
  paikka();

  if(show_checkpoint) {
    ctx.drawImage(big_checkpoint,mapWidth-419-offsetX,mapHeight-431-offsetY);
  }
      
  entitys[0].xspeed = (stablefps*nopeus)/fpsNow;
  entitys[0].yspeed = (stablefps*pystynopeus)/fpsNow;
  fpsNow = fps.getFPS();   
  ctx.font = "18px vampyre";
  ctx.fillStyle="white";
  ctx.strokeStyle = 'black';
  ctx.miterLimit = 2;
  ctx.lineWidth = 7;  
  ctx.lineJoin = 'circle';  
  ctx.strokeText("FPS: "+fpsNow,mapWidth-150-offsetX,50-offsetY);
  ctx.strokeText("Coins: "+kolikot,mapWidth-150-offsetX,80-offsetY);
  ctx.strokeText("Lives: "+lifes,mapWidth-150-offsetX,110-offsetY);
  ctx.strokeText("Deaths: "+deaths,mapWidth-150-offsetX,140-offsetY);
  ctx.fillText("FPS: "+fpsNow,mapWidth-150-offsetX,50-offsetY);
  ctx.fillText("Coins: "+kolikot,mapWidth-150-offsetX,80-offsetY);
  ctx.fillText("Lives: "+lifes,mapWidth-150-offsetX,110-offsetY);
  ctx.fillText("Deaths: "+deaths,mapWidth-150-offsetX,140-offsetY);  
  if(lifes == "!DEAD!"){
    ctx.strokeStyle = 'black';
    ctx.miterLimit = 2;
    ctx.lineJoin = 'circle';
    ctx.font = "50px vampyre";
    ctx.lineWidth = 7;
    ctx.strokeText("Press \"R\" to restart", mapWidth/4-offsetX-60, mapHeight/2-offsetY);
    ctx.lineWidth = 1;
    ctx.fillText("Press \"R\" to restart", mapWidth/4-offsetX-60, mapHeight/2-offsetY);               
  }
    if(!handling) {
    ctx.drawImage(ouch,-offsetX,-offsetY);
  } 
  ctx.restore();
}
//*...And here we render it all to the canvas!
function GameRender(){
  var c = document.getElementById("gameCanvas");
  if(c.getContext){
    this.ctx = c.getContext("2d");
    ctx.clearRect(0,0, mapWidth, mapHeight);
    Game();
    Nappain();
    Gravity();
    MobMovement();      
  }
}
