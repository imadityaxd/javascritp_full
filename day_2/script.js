window.onload = init;
function init()
{
    var images = document.getElementsByTagName("img");
    for(var i = 0; i<images.length; i++){
        images[i].onclick = showAnswer;
    }
}
function showAnswer()
{
    var image= document.getElementById("first");
    image.src= "img_2.png";
    image.onclick = init;
}