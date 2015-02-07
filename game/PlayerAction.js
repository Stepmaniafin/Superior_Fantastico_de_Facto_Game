//Here we define all about movement, movement speed and collisions...
  function Jump(){
    if(jumptruefalse == true){   
      yVelocity = entitys[0].y;
      if(jumpFuel > 0){

        if(jumpFuel==12){
          document.getElementById('jump').currentTime = 0;
          document.getElementById('jump').play();
          landing=true;
        }

        entitys[0].y -= pystynopeus;
        jumpFuel--;
      }                                  
    }
    else jumptruefalse = false;
  }
 
  function Gravity(){
    var gravity = true;
    var gravitySpeed = 5;   
    entitys[0].y += gravitySpeed;
    for(i=0;i<checks.length;i++){
      if(checks[i].name == "25500255" && isCollision(entitys[0],checks[i]) || checks[i].name == "1257525255" && isCollision(entitys[0],checks[i]) || checks[i].name == "02550255" && isCollision(entitys[0],checks[i]) && !collision ){
        entitys[0].y = checks[i].y-tileHeight;
        jumptruefalse = true;
        jumpFuel = 12;
        
        if(landing){
        document.getElementById('land').currentTime = 0;
        document.getElementById('land').play();
        landing = false;
        }
        
      }
    }
  }
  
  function kuolo (){
    handling = false;
    setTimeout(function(){
      handling = true;
      removeEntity(0);
      createEntity("hero",playerSpawnY, playerSpawnX); 
    }, 2000);
     
  }