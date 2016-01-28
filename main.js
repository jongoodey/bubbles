var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var myName = "Your name";


document.getElementById("name").addEventListener("input", function(){
    console.log(this.value);
    myName = this.value;
    drawName(myName, letterColors);
});

var letterColors = [red,orange,green];
if(15 > 5 ) {
   bubbleShape = "circle";
}

else {
    bubbleShape = "square";
}
drawName(myName, letterColors);
bounceBubbles();