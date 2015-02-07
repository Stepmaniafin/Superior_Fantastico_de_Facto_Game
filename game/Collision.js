// Collision file, where we create collision detection for entitys vs tiles/blocks

 
  function isCollision(rect1, rect2) {
    return ! (
		(rect1.y+rect1.height-2< rect2.y) ||
		(rect1.y > rect2.y+rect2.height-2) ||
		(rect1.x > rect2.x+rect2.width-2) ||
		(rect1.x+rect1.width-2 < rect2.x) )
  }
  
  function isMobCollision(rect1, rect2) {
    return ! (
		(rect1.y+rect1.height-2< rect2.y) ||
		(rect1.y > rect2.y+rect2.height-2) ||
		(rect1.x > rect2.x+rect2.width+4) ||
		(rect1.x+rect1.width+4 < rect2.x) )
  }  