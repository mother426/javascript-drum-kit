for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    switch(this.innerHTML){
      case "d":
        const tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "j":
        const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play(); 
      case "k":
        const tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      case "l":
        const tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play(); 
        
    }
  });
}

