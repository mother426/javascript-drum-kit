for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    switch(this.innerHTML){
      case "w":
        tom1.play()
        break;
    }
  });
}

var tom1 = new Audio('sounds/tom-1.mp3');
// tom1.play();
