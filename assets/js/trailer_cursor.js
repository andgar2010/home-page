if (3 > window.location.pathname.split('/').length) {
  document.body.style.overflow = "clip";
} else {
  document.body.style.overflowX = "hidden";
}

const trailer = document.getElementById("trailer");

const animateTrailer = (e, isInteracting) => {
  const { clientX, clientY } = e;
  const x = clientX - trailer.offsetWidth / 2,
    y = clientY - trailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 2.5 : 0.75})`,
    opacity: `${isInteracting ? 0.5 : 1}`
  };

  trailer.animate(keyframes, { duration: 350, fill: "forwards" });
};

const getTailerClass = (type) => {
  switch (type) {
    case "video":
      return "fa fa-play";
    case "title":
      return "fa fa-file-text-o";
    default:
      return "fa fa-location-arrow";
  }
};

window.onmousemove = e => {
  const interactable = e.target.closest("a");
  const isInteracting = interactable !== null;
  const icon = document.getElementById("trailer-icon");
  animateTrailer(e, isInteracting);

  if (isInteracting) {
    trailer.className = interactable.className;
    const newClass = getTailerClass(interactable.className).split(' ');
    icon.classList.add(...newClass);
  } else {
    if (trailer && trailer.classList && trailer.classList.length > 0) {
      trailer.removeAttribute("class");
    }
    if (icon && icon.classList && icon.classList.length > 0) {
      icon.removeAttribute("class");
    }
  }
};
