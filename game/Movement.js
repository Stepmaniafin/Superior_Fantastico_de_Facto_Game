//Here we define all about movement, movement speed and collisions...


//-------------
  
  
  var jumptruefalse;   
  var jumpFuel = 12;
  var landing = false; 
  var run_count=1;
  var walkanim = false; 
  var handling = true;
  var collision = true;
//Keypress reading here:
  
//Location check
  function paikka(){
    checks = [];
    rivi_yla =  Math.floor(entitys[0].y/24)-2;
    sarake_vasen =  Math.floor(entitys[0].x/24)-2;
    if(rivi_yla < 0){rivi_yla = 0;}
    if(rivi_yla > rendered_map.lenght-1){rivi_yla = rendered_map.lenght-1;}
    if(sarake_vasen < 0){sarake_vasen = 0;}
    if(sarake_vasen > rendered_map[0].lenght-1){sarake_vasen = rendered_map[0].lenght-1;}
    
    for(i=rivi_yla;i<=rivi_yla+4;i++){
      for(j=sarake_vasen;j<=sarake_vasen+4;j++){
        addCheck(rendered_map[i][j],j*24,i*24);
      }
    }
  }
  
 function Nappain(){
  if (handling){
    if(keyState[37] || keyState[65] || vasen_tila){
      facing = "left";
      walkanim = true;
      document.getElementById('run').play();
      entitys[0].x -= entitys[0].xspeed; 
       for(i=0;i<checks.length;i++){
        if(checks[i].name == "25500255" && isCollision(entitys[0],checks[i]) || checks[i].name == "1257525255" && isCollision(entitys[0],checks[i])  || checks[i].name == "02550255" && isCollision(entitys[0],checks[i]) && collision==false ){
        entitys[0].x = checks[i].x+tileWidth;
        }
      }
    }
//Movement
    if(keyState[39] || keyState[68] || oikea_tila){
      facing = "right";
      walkanim = true;
      document.getElementById('run').play();   
      entitys[0].x += entitys[0].xspeed;
      for(i=0;i<checks.length;i++){
        if(checks[i].name == "25500255" && isCollision(entitys[0],checks[i]) || checks[i].name == "1257525255" && isCollision(entitys[0],checks[i])  || checks[i].name == "02550255" && isCollision(entitys[0],checks[i]) && collision==false ){
        entitys[0].x = checks[i].x-tileWidth;
        }
      }
    }
    
    if(keyState[38] || keyState[87] || hyppy_tila){  
      Jump();
      for(i=0;i<checks.length;i++){
        if(checks[i].name == "25500255" && isCollision(entitys[0],checks[i]) || checks[i].name == "1257525255" && isCollision(entitys[0],checks[i])  || checks[i].name == "02550255" && isCollision(entitys[0],checks[i]) && collision==false ){
          entitys[0].y = checks[i].y+tileHeight-4;
        }
      }
    }
    
    if(keyState[82] && lifes == "!DEAD!"){
      handling = false;
      ouch.src = "resources/reload.png";
      setTimeout(function(){
        handling = true;
        removeEntity(0);
        lifes = 3;
        deaths = 0;
        kolikot = 0;
        for (var x = 0; x < rendered_map.length; x++) {
          for (var y = 0; y < rendered_map[x].length; y++) {
            rendered_map[x][y] = original_rendered_map[x][y];
          }
        }     
        playerSpawnX = bornX;
        playerSpawnY = bornY;
        ouch.src = "resources/ouch.png";
        createEntity("hero", bornY, bornX);
      }, 3000);
    } 
//Collision checks  
    for(i=0;i<checks.length;i++){
       if(checks[i].name == "02550255" && isCollision(entitys[0],checks[i]) && collision){
          lifes--;
          deaths++;
          kuolo();           
          if(lifes < 0){
             playerSpawnX = loseX;
             playerSpawnY = loseY;
             lifes = "!DEAD!";
          }          
          document.getElementById('mine').currentTime = 0;
          document.getElementById('mine').play();
          break;    
        }
        if(checks[i].name == "2550255255" && isCollision(entitys[0],checks[i]) && keyState[83] || checks[i].name == "2550255255" && isCollision(entitys[0],checks[i]) && keyState[40] || checks[i].name == "2550255255" &&  check_tila && isCollision(entitys[0],checks[i])){
          //Notice that playerSpawnY is defined for checkpoints[i].x
          //For more info, check out Map.js ~line 55!
          playerSpawnX = checks[i].y-24;
          playerSpawnY = checks[i].x;
          show_checkpoint = true;
          setTimeout(function(){
            show_checkpoint = false;
          }, 1000); 
          document.getElementById('checkpoint').play(); 
        } 
        if(checks[i].name == "2552550255" && isCollision(entitys[0],checks[i])){
          rendered_map[checks[i].y/24][checks[i].x/24] = "0000";              
          kolikot += 1; 
          if(kolikot % 10 == 0){
            lifes++;
          }      
          document.getElementById('coin').currentTime = 0;
          document.getElementById('coin').play();  
        }
    }
       
    for(i=0;i<basicMobs.length;i++){
      if(isCollision(entitys[0],basicMobs[i]) && collision){
          lifes--;
          deaths++;
          kuolo();  
          if(lifes < 0){
             playerSpawnX = loseX;
             playerSpawnY = loseY;
             lifes = "!DEAD!";
          }
        document.getElementById('mine').currentTime = 0;
        document.getElementById('mine').play();    
        break; 
      }
    }

    for(i=0;i<goals.length;i++){
      if(isCollision(entitys[0],goals[i])){
        playerSpawnX = winX;
        playerSpawnY = winY;
        //If (true), instantly turns false so that the setTimeout works properly
        if(true){
          false;          
          setTimeout(function(){
            removeEntity(0);        
            createEntity("hero",playerSpawnY, playerSpawnX);
          }, 3000);
        }
        document.getElementById('musiikki').muted = true;; 
        document.getElementById('goal').play();          
      }
    }
  }  
  }
