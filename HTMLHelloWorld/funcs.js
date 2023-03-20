var buttonElement = document.getElementById("textChange");
buttonElement.addEventListener("click", changeText, false);

var buttonElement2 = document.getElementById("colorChange");
buttonElement2.addEventListener("click", changeColor, false);

var textElement = document.getElementById("changingText");


function changeText(){
    if(textElement.innerText == "?")
        textElement.innerText = "hello world";
    else
        textElement.innerText = "?";
}

function changeColor(){
    if(textElement.style.color == "black")
        textElement.style.color = "white";
    else
        textElement.style.color = "black";
}