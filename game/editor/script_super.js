function begin (){
  for (var j=1;j<=27;j++){
    document.getElementById("solu_1_"+j).style.backgroundImage = "url('block.png')";
  }
  for (var j=1;j<=27;j++){
    document.getElementById("solu_20_"+j).style.backgroundImage = "url('block.png')";
  }
  for (var j=1;j<=20;j++){
    document.getElementById("solu_"+j+"_1").style.backgroundImage = "url('block.png')";
  }
  for (var j=1;j<=20;j++){
    document.getElementById("solu_"+j+"_27").style.backgroundImage = "url('block.png')";
  }        
}

function read (){
lines = document.getElementById('code').value.split('\n');
character = " ";
image = "block.png";
  var vaaka = 5;
  var pysty = 6;
  for (var i=1;i<=20*pysty;i++){
    for (var j=1;j<=27*vaaka;j++){
      character = lines[i-1].charAt(j-1);
      switch(character)
      {
	     case "B":
        image = "block.png";
        break;
	     case "H":
        image = "hiddenblock.png";
        break;
	     case "F":
        image = "fakeblock.png";
        break;
	     case "C":
        image = "coin.png";
        break;
	     case "N":
        image = "needle.png";
        break;
	     case "M":
        image = "basicmob.png";
        break;
	     case "P":
        image = "checkpoint_1.png";
        break;
	     case "X":
        image = "heros.png";
        break;
	     case "W":
        image = "win.png";
        break;
	     case "L":
        image = "lose.png";
        break;
	     case "G":
        image = "flag.png";
        break;                        
	     case "-":
        image = "";
        break;                                                        
      }
      document.getElementById("solu_"+i+"_"+j).style.backgroundImage="url('"+image+"')";
      if(image == "checkpoint_1.png"){
        document.getElementById("solu_"+(i-1)+"_"+j).style.backgroundImage="url('checkpoint_2.png')";  
      }
    }
  }        
}

var image = "block.png";

function set_image (type){
  str = type.src;
  res = str.split("/");  
  image = res[res.length-1];
  document.getElementById("pensseli").src = image;
  if(image=="eraser.png"){
    image = "";
  }
}

  var keyState={};
  window.addEventListener('keydown', function(e){
    keyState[e.keyCode || e.which] = true;
  }, true);

  window.addEventListener('keyup', function(e){
    keyState[e.keyCode || e.which] = false;
  }, true);
  
      
function set (cell, click) {

if (keyState[65] && !keyState[83] || click) {

  str = cell.id;
  res = str.split("_");
  bimage = "";
  if (cell.style.backgroundImage != ""){
    style = cell.currentStyle || window.getComputedStyle(cell, false),
    bimage = style.backgroundImage.slice(4, -1);
    biurl = bimage.split("/");  
    bimage = biurl[biurl.length-1];  
  }
  
  if (bimage == "checkpoint_2.png") {
    document.getElementById("solu_"+(res[1]-(-1))+"_"+res[2]).style.backgroundImage="url('')";
    cell.style.backgroundImage="url('')"; 
  }
  if (bimage == "checkpoint_1.png") {
    document.getElementById("solu_"+(res[1]-1)+"_"+res[2]).style.backgroundImage="url('')";
    cell.style.backgroundImage="url('')"; 
  } 
    
  if (image == "checkpoint.png"){
    if (document.getElementById("solu_"+(res[1]-1)+"_"+res[2]).style.backgroundImage.indexOf("checkpoint") != -1) {
      document.getElementById("solu_"+(res[1]-1)+"_"+res[2]).style.backgroundImage="url('')";
      document.getElementById("solu_"+(res[1]-2)+"_"+res[2]).style.backgroundImage="url('')";
    }
    if (res[1]!=1){
      document.getElementById("solu_"+(res[1]-1)+"_"+res[2]).style.backgroundImage="url('checkpoint_2.png')";
      document.getElementById("solu_"+res[1]+"_"+res[2]).style.backgroundImage="url('checkpoint_1.png')";
    }                  
  }
  
  else {  
    cell.style.backgroundImage="url('"+image+"')";
  } 
}

if (keyState[83] && !keyState[65]) {

  str = cell.id;
  res = str.split("_");
  bimage = "";
  if (cell.style.backgroundImage != ""){
    style = cell.currentStyle || window.getComputedStyle(cell, false),
    bimage = style.backgroundImage.slice(4, -1);
    biurl = bimage.split("/");  
    bimage = biurl[biurl.length-1];  
  }
  
  if (bimage == "checkpoint_2.png") {
    document.getElementById("solu_"+(res[1]-(-1))+"_"+res[2]).style.backgroundImage="url('')";
    cell.style.backgroundImage="url('')"; 
  }
  if (bimage == "checkpoint_1.png") {
    document.getElementById("solu_"+(res[1]-1)+"_"+res[2]).style.backgroundImage="url('')";
    cell.style.backgroundImage="url('')"; 
  }  
    cell.style.backgroundImage="url('')"; 
}

}
