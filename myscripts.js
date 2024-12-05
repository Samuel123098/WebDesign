let display = document.getElementById("display")
function DisplayToScreen(input){
 display.value = input
 display.style.textAlign = 'center'
}

let image = document.getElementById("image")
function party(){
    image.style.animation = 'fade 20s ease-in';
    image.style.opacity = 1;
    image.style.animationFillMode = 'forwards';
    
}