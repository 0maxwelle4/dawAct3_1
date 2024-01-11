const svgPath = document.querySelectorAll('.path');

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 15000,
  delay: (el, i) => { return i * 500 }
});


function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      window.location.href = './Pagina_Vynil_Steve_Maxwelle/index.html';
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("demo").innerHTML = width * 1  + '%';
    }
  }
}
move();