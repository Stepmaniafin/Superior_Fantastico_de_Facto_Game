    <?php
  $im = imagecreatefrompng('../../resources/levelZero.png');
  $string = '';
  $string = '<table>';
for ($k=1;$k<=6;$k++){
$string = $string.'<tr>';
for ($l=1;$l<=5;$l++){
$string = $string.'<td style="border: solid 2px white;"  onClick="selectText(this)">';  
  for ($i=1;$i<=20;$i++){
    for ($j=1;$j<=27;$j++){
      $rgb = imagecolorat($im, ($j-1+27*($l-1)), ($i-1+20*($k-1)));
      $colors = imagecolorsforindex($im, $rgb);
      $varit = $colors['red']."-".$colors['green']."-".$colors['blue']."-".$colors['alpha'];
      $letter = " ";
      switch($varit)
      {
	     case "255-0-0-0":
        $letter = "B";
        break;
	     case "125-75-25-0":
        $letter = "H";
        break;
	     case "0-255-255-0":
        $letter = "F";
        break;
	     case "255-255-0-0":
        $letter = "C";
        break;
	     case "0-255-0-0":
        $letter = "N";
        break;
	     case "123-123-123-0":
        $letter = "M";
        break;
	     case "255-0-255-0":
        $letter = "P";
        break;
	     case "0-0-255-0":
        $letter = "X";
        break;
	     case "255-0-200-0":
        $letter = "W";
        break;
	     case "0-0-0-0":
        $letter = "L";
        break;
	     case "255-255-255-0":
        $letter = "G";
        break;
	     case "0-0-0-127":
        $letter = "-";
        break;
      }
      $string = $string.$letter;
    }
    $string = $string.'<br>';
  }
$string = $string.'</td>';
}
$string = $string.'</tr>';
}
$string = $string.'</table>';
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Superior Game</title>
    <link type="text/css" rel="stylesheet" href="style.css" />
<script type="text/javascript">
function selectText(textC) //divID contains actual id of ‘div’ element
{ 

if (document.selection)
{
//Portion for IE
var div = document.body.createTextRange();
div.moveToElementText(textC);
div.select();
}
else
{
//Portion for FF
var div = document.createRange();
div.setStartBefore(textC);
div.setEndAfter(textC);
window.getSelection().addRange(div);
}
}
</script>
  </head>
  <body>
  <div id="container">
    <h1>Superior Fantastico de Facto game levels</h1>
    <h3>Klikkaa tekstiä ja kopioi se editoriin</h3>
    <div id="print"><?php echo($string);?></div>
  </div> 
  </body>
</html>
