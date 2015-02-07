//Here we define map file where we read RGB values to read & create our map!
  var rendered_map = new Array();
  var original_rendered_map = new Array();
  
  function map_render(){    
    img = new Image();
    img.src = 'resources/levelZero.png';  
    map_width = 270;
    map_height = 300;

    var canvas = document.createElement('canvas');
    canvas.id = "map";
    canvas.width = map_width;
    canvas.height = map_height;
    canvas.style.display = 'none'; 
    body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    var c = document.getElementById("map");

    map = c.getContext("2d");
    map.drawImage(img, 0, 0);
    imgData = map.getImageData(0, 0, map_width, map_height);
    
    laskuri = 0;
    
    for(i=0; i<map_height; i++){
      rendered_map.push(new Array());
      original_rendered_map.push(new Array());
      for(j=0 ; j<map_width ; j++){
        for(k=0 ; k<=3 ; k++){
          if(k==0){
            rendered_map[i].push("");
            original_rendered_map[i].push("");
          }
          rendered_map[i][j] += imgData.data[laskuri];
          original_rendered_map[i][j] += imgData.data[laskuri];
          laskuri++;
        }
      }
    }
  Startup();
  }