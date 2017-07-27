var i = 0;
var path = new Array();

path[0] = "image1.jpg";
path[1] = "image2.jpg";
path[2] = "image3.jpg";
path[3] = "image4.jpg";
function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) 
   i++; 
   else
    i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;