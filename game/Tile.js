// Tile file, where we define & create tiles to the playground
var blocks = [];
var needles = [];
var goals = [];
var checks = [];
var tileWidth = 24;
var tileHeight = 24;

function Tile(){
  this.name = "";
  this.width = 0;
  this.height = 0;
  this.x = 0;
  this.y = 0;
  this.drawablemapx;
  this.drawablemapy;
}


function addCheck(name, x, y){
  var check = new Tile;
  check.name = name;
  check.width = tileWidth;
  check.height = tileHeight;
  check.x = x;
  check.y = y;
  
  checks.push(check);
}

function addBlock(name, x, y){
  var block = new Tile;
  block.name = name;
  block.width = tileWidth;
  block.height = tileHeight;
  block.x = x;
  block.y = y;
  
  blocks.push(block);
}

function addNeedle(name, x, y){
  var needle = new Tile;
  needle.name = name;
  needle.width = tileWidth;
  needle.height = tileHeight;
  needle.x = x;
  needle.y = y;
  
  needles.push(needle);
}

function addGoal(name, x, y){
  var goal = new Tile;
  goal.name = name;
  goal.width = tileWidth;
  goal.height = tileHeight;
  goal.x = x;
  goal.y = y;
  
  goals.push(goal);
}