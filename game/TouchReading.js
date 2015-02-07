//Here we define all about movement, movement speed and collisions...

//Kosketus

//http://www.javascriptkit.com/javatutors/touchevents.shtml
 var oikea_tila = false;
 var vasen_tila = false;
 var hyppy_tila = false;
 var check_tila = false; 

window.addEventListener('load', function(){
 
 var oikea_nappi = document.getElementById('oikea_nappi');
 var vasen_nappi = document.getElementById('vasen_nappi');
 var hyppy_nappi = document.getElementById('hyppy_nappi');
 var check_nappi = document.getElementById('check_nappi');  
 
 oikea_nappi.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
  oikea_tila = true;
  e.preventDefault()
 }, false)
 
 oikea_nappi.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event
  oikea_tila = false;
  e.preventDefault()
 }, false)
 
 vasen_nappi.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
  vasen_tila = true;
  e.preventDefault()
 }, false)
 
 vasen_nappi.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event
  vasen_tila = false;
  e.preventDefault()
 }, false)
 
 hyppy_nappi.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
  hyppy_tila = true;
  e.preventDefault()
 }, false)
 
 hyppy_nappi.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event
  hyppy_tila = false;
  e.preventDefault()
 }, false) 
 
 check_nappi.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
  check_tila = true;
  e.preventDefault()
 }, false)
 
 check_nappi.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event
  check_tila = false;
  e.preventDefault()
 }, false)  
  
 
}, false)



//Keypress reading here:
  var keyState={};
  
  window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  window.addEventListener('keydown', function(e){
    keyState[e.keyCode || e.which] = true;
  }, true);

  window.addEventListener('keyup', function(e){
    keyState[e.keyCode || e.which] = false;
  }, true);
