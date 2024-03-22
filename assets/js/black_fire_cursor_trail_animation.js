const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener('mousemove', function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});


function animateCircles () {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    let xOffset = 12;
    let yOffset = 12;
    let xTarget = x - xOffset;
    let yTarget = y - yOffset;

    // Ajuste de distancia entre círculos y escalamiento conforme al índice
    const scale = (circles.length - index) / circles.length;

    // circle.style.left = xTarget + 'px';
    // circle.style.top = yTarget + 'px';
    // circle.style.scale = scale;

    const keyframes = [
      { transform: `translate(${xTarget}px, ${yTarget}px) scale(${scale})` }
    ];

    const options = {
      duration: 350,
      fill: 'forwards'
    };
    circle.animate(keyframes, options);

    // Actualiza las posiciones actuales del círculo para la próxima iteración
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
