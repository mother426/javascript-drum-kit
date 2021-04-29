for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    console.log(this.innerHTML);

  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'w') {
    document.getElementById('crash').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'a') {
    document.getElementById('kick').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 's') {
    document.getElementById('snare').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'd') {
    document.getElementById('tom1').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'j') {
    document.getElementById('tom2').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'k') {
    document.getElementById('tom3').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'l') {
    document.getElementById('tom4').play();
  }
});


var tom1 = new Audio('sounds/tom-1.mp3');
tom1.play();
