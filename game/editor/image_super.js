function render(){
var vaaka = 5;
var pysty = 6;
var p = new PNGlib(27*vaaka, 20*pysty, 256); // construcor takes height, weight and color-depth
var background = p.color(0, 0, 0, 0); // set the background transparent

  for (var i=1;i<=20*pysty;i++){
    for (var j=1;j<=27*vaaka;j++){
      cell = document.getElementById("solu_"+i+"_"+j);
      bimage = "";
      if (cell.style.backgroundImage != ""){
        style = cell.currentStyle || window.getComputedStyle(cell, false),
        bimage = style.backgroundImage.replace("url", "");
        bimage = bimage.replace("(", "");
        bimage = bimage.replace(")", ""); 
        bimage = bimage.replace(/"/g, "");               
        biurl = bimage.split("/");  
        bimage = biurl[biurl.length-1];  
      }
      
      red = 0;
      green = 0;
      blue = 0;
      opacity = 0;
      switch(bimage)
      {
	     case "block.png":
        red = 255;
        green = 0;
        blue = 0;
        opacity = 255;
	     break;
	     case "hiddenblock.png":
        red = 125;
        green = 75;
        blue = 25;
        opacity = 255;
	     break;
	     case "fakeblock.png":
        red = 0;
        green = 255;
        blue = 255;
        opacity = 255;
	     break; 
	     case "coin.png":
        red = 255;
        green = 255;
        blue = 0;
        opacity = 255;
	     break;
	     case "needle.png":
        red = 0;
        green = 255;
        blue = 0;
        opacity = 255;
	     break;
	     case "basicmob.png":
        red = 123;
        green = 123;
        blue = 123;
        opacity = 255;
	     break;
	     case "checkpoint_1.png":
        red = 255;
        green = 0;
        blue = 255;
        opacity = 255;
	     break;
	     case "win.png":
        red = 255;
        green = 0;
        blue = 200;
        opacity = 255;
	     break;
	     case "lose.png":
        red = 0;
        green = 0;
        blue = 0;
        opacity = 255;
	     break;
	     case "flag.png":
        red = 255;
        green = 255;
        blue = 255;
        opacity = 255;
	     break;                     
	     case "heros.png":
        red = 0;
        green = 0;
        blue = 255;
        opacity = 255;
	     break;                                                
      }
      p.buffer[p.index(j-1,i-1)] = p.color(red, green, blue, opacity);
    }
  }
document.getElementById("print").innerHTML = '<img src="data:image/png;base64,'+p.getBase64()+'">';
}