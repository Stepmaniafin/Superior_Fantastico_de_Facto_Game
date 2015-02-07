    <?php
$target_file = "php.png";
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

// Check if file already exists
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "png") {
    echo "Sorry, only PNG files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
}    
  $im = imagecreatefrompng("php.png");
  $string = '';
  $string = '<table>';   
  $string = $string.'<tr>';
  $string = $string.'<td style="border: solid 2px white;"  onClick="selectText(this)">';   
  for ($i=1;$i<=20;$i++){       
    for ($j=1;$j<=27;$j++){     
      $rgb = imagecolorat($im, $j-1, $i-1);    
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
  $string = $string.'</tr>'; 
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
  <div id="container" style="text-align:center;">
    <form action="index.php" method="post" enctype="multipart/form-data">
    Select image to upload:<br>
    <input type="file" name="fileToUpload" id="fileToUpload"><br>
    <input type="submit" value="Upload Image" name="submit">
    </form>
    <div id="print"><?php echo($string);?></div>
  </div>
 
  </body>
</html>
