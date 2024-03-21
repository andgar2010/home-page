// Cursor Color Blur
const cursorColor = document.getElementById("cursor-color-bg")
document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;
  cursorColor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`,
  }, { duration: 1000, fill: "forwards" });
};