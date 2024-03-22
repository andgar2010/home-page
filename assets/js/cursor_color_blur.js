// Cursor Color Blur
const cursorColor = document.getElementById("cursor-color-bg");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = event;

  const x = clientX - cursorColor.offsetWidth / 2,
    y = clientY - cursorColor.offsetHeight / 2;

  cursorColor.animate({
    left: `${x}px`,
    top: `${y}px`,
  }, { duration: 1000, fill: "forwards" });

});