//Define all graphics for the game, characters and levels...
var bgImage = new Image();
var facing = "right";
var stablefps = 60;
var fpsNow = stablefps; 

bgImage.src = "resources/bg.jpg";
bgWidth = mapWidth;
bgHeight = mapHeight;

var levelZero = new Image();
levelZero.src = "resources/levelZero.png";
levelWidth = 72;
levelHeight = 40;

var big_checkpoint = new Image();
big_checkpoint.src = "resources/big_checkpoint.png";
var show_checkpoint = false;

var ouch = new Image();
ouch.src = "resources/ouch.png";

var info_tausta = new Image();
info_tausta.src = "resources/info_tausta.png";

//Various Entity images
var heroImage = new Image();
heroImage.src = "resources/heros.png";
heroWidth = 24;
heroHeight = 24;

var basicMobImage = new Image();
basicMobImage.src = "resources/basicmob.png"
basicMobWidth = 24;
basicMobHeight = 24;
var basicMobxspeed = 5;
var basicMobyspeed = 5;

var show_check = false;

//Various Tile images
var check_tileImage = new Image();
check_tileImage.src = "resources/check_tile.png";

var blockImage = new Image();
blockImage.src = "resources/block.png";

var fakeBlockImage = new Image();
fakeBlockImage.src = "resources/fakeblock.png";

var hiddenBlockImage = new Image();
hiddenBlockImage.src = "resources/hiddenblock.png";

var coinImage = new Image();
coinImage.src = "resources/coin.png";

var needleImage = new Image();
needleImage.src = "resources/needle.png";

var checkpointImage = new Image();
checkpointImage.src = "resources/checkpoint.png";

var goalImage = new Image();
goalImage.src = "resources/goal.png";
//fps function to get the current frames per second
var fps = {
	startTime : 0,
	frameNumber : 0,
	getFPS : function(){
		this.frameNumber++;
		var d = new Date().getTime(),
			currentTime = ( d - this.startTime ) / 1000,
			result = Math.floor( ( this.frameNumber / currentTime ) );
		if( currentTime > 1 ){
			this.startTime = new Date().getTime();
			this.frameNumber = 0;
		}
		return result;
	},
}

var muteboolean = false;
function effects_mute(){
if (muteboolean){
  document.getElementById('jump').muted = false;
  document.getElementById('land').muted = false;
  document.getElementById('coin').muted = false;
  document.getElementById('mine').muted = false;
  document.getElementById('checkpoint').muted = false;
  document.getElementById('run').muted = false;
  muteboolean = false;
}
else{
  document.getElementById('jump').muted = true;
  document.getElementById('land').muted = true;
  document.getElementById('coin').muted = true;
  document.getElementById('mine').muted = true;
  document.getElementById('checkpoint').muted = true;
  document.getElementById('run').muted = true;
  muteboolean = true;
}                                                                                    
}

function animation(img, widthpoint, heightpoint, width, height, x, y, width2, height2){
  if(landing){
    ctx.drawImage(img,widthpoint*0,heightpoint, width, height, x, y, width2, height2);
  }
  else {  
    if(facing == "right"){
      if (walkanim){  
        if (run_count>=1 && run_count<=8 || run_count>=33 && run_count<=40){
          ctx.drawImage(img,widthpoint*5,heightpoint, width, height, x, y, width2, height2);
        }
        else if (run_count>=9 && run_count<=16 || run_count>=25 && run_count<=32 || run_count>=41 && run_count<=48 || run_count>=57 && run_count<=64){
          ctx.drawImage(img,widthpoint*6,heightpoint, width, height, x, y, width2, height2);
        }
        else if (run_count>=17 && run_count<=24 || run_count>=49 && run_count<=56){
          ctx.drawImage(img,widthpoint*7,heightpoint, width, height, x, y, width2, height2);
        }
        run_count++
        if(run_count == 65){run_count=1;}
      }
      else {
        ctx.drawImage(img,widthpoint*8,heightpoint, width, height, x, y, width2, height2);
        document.getElementById('run').pause(); 
      }
    }
    else if(facing == "left"){
      if (walkanim){  
        if (run_count>=1 && run_count<=8 || run_count>=33 && run_count<=40){
          ctx.drawImage(img,widthpoint*1,heightpoint, width, height, x, y, width2, height2);
        }
        else if (run_count>=9 && run_count<=16 || run_count>=25 && run_count<=32 || run_count>=41 && run_count<=48 || run_count>=57 && run_count<=64){
          ctx.drawImage(img,widthpoint*2,heightpoint, width, height, x, y, width2, height2);
        }
        else if (run_count>=17 && run_count<=24 || run_count>=49 && run_count<=56){
          ctx.drawImage(img,widthpoint*3,heightpoint, width, height, x, y, width2, height2);
        }
        run_count++
        if(run_count == 65) run_count=1;
      }
      else {
        ctx.drawImage(img,widthpoint*4,heightpoint, width, height, x, y, width2, height2);
        document.getElementById('run').pause(); 
      }
    }
    walkanim = false;
  }
}