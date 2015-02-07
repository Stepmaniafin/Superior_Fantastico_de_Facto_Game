var lippuset = new Array();
function cheat(){
  level = prompt("Give checkpoint number 0-"+ (lippuset.length-1) + ".", "");
  if (!isNaN(level) && level>=0 && level<lippuset.length) {
    kordinaatit = lippuset[level].split("|");
    playerSpawnY = parseInt(kordinaatit[0]); 
    playerSpawnX = parseInt(kordinaatit[1]);
    removeEntity(0);
    createEntity("hero",playerSpawnY, playerSpawnX);   
  }
}