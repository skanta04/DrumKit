for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}




function playSound() {
    
    var buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.png");
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.png");
            crash.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.png");
            kick.play();
        break;

        default:
    }
}



