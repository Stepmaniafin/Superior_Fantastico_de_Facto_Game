//Here we define all about movement, movement speed and collisions...

  
  var mobrun_count=1;
  var mobwalkanim = false;  

//Keypress reading here:
  
  function MobMovement(){
    for(i=0;i<basicMobs.length;i++){
      if(basicMobs[i].facing == "left"){
        mobwalkanim = true;
        basicMobs[i].x -= basicMobs[i].xspeed; 
         for(j=0;j<blocks.length;j++){
          if(isMobCollision(basicMobs[i],blocks[j])){
          basicMobs[i].facing = "right";
          }
        }
         for(j=0;j<needles.length;j++){
          if (isMobCollision(basicMobs[i],needles[j])){
          basicMobs[i].facing = "right";
          }
        }        
      }
      else if(basicMobs[i].facing == "right"){
        mobwalkanim = true;
        basicMobs[i].x += basicMobs[i].xspeed; 
         for(j=0;j<blocks.length;j++){
          if(isMobCollision(basicMobs[i],blocks[j])){
          basicMobs[i].facing = "left";
          }
        }
         for(j=0;j<needles.length;j++){
          if (isMobCollision(basicMobs[i],needles[j])){
          basicMobs[i].facing = "left";
          }
        }         
      }
    }        
  }

  //MODIFY THIS (IF YOU WANT THIS TO WORK)
  function mobsGravity(){
    var mobsGravitySpeed = 5;   
    for(j=0;j<basicMobs.length;j++)
      basicMobs[j].y += mobsGravitySpeed;
      for(i=0;i<blocks.length;i++){
        if(isMobCollision(basicMobs[0],blocks[i])){
          basicMobs[0].y = blocks[i].y-tileHeight-1;
      }
    }   
  }