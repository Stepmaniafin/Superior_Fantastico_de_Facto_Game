// Entity file, where we create new Entity(player, mobs, etc...)
var entitys = [];
var basicMobs = [];
var lifes = 3;
var deaths = 0;
var kolikot = 0;
var facing = "right";
var mobfacing = "left";
var nopeus = 4;
var pystynopeus = 15;
var loseX = 0;
var loseY = 0;
var winX = 0;
var winY = 0;

function Entity(){
  this.name = "";
  this.width = 0;
  this.height = 0;
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.alive = false;
}

function addEntity(name, width, height, x, y, xspeed, yspeed, facing, alive){
  var ent = new Entity;
  ent.name = name;
  ent.width = width;
  ent.height = height;
  ent.x = x;
  ent.y = y;
  ent.xspeed = xspeed;
  ent.yspeed = yspeed;
  ent.facing = facing;
  ent.alive = true;
  
  entitys.push(ent);
}

function addBasicMob(name, width, height, x, y, xspeed, yspeed, facing, alive){
  var basicmob = new Entity;
  basicmob.name = name;
  basicmob.width = width;
  basicmob.height = height;
  basicmob.x = x;
  basicmob.y = y;
  basicmob.xspeed = xspeed;
  basicmob.yspeed = yspeed;
  basicmob.facing = facing;
  basicmob.alive = true;
  
  basicMobs.push(basicmob);
}

function removeEntity(x){
  entitys.splice(x, 1);
}  
         
function createEntity(name, x, y){
  addEntity(name, heroWidth, heroHeight, x, y, 4, 15, facing, true);//nopeus oli ennen 4! http://buildnewgames.com/real-time-multiplayer/
}

function createBasicMob(name, x, y, facing){
  addBasicMob(name, basicMobWidth, basicMobHeight, x, y, basicMobxspeed, basicMobyspeed, facing, true);
}                                                   