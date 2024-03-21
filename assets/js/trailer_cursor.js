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
  trailer.className = isInteracting ? interactable.className : "";
  if (isInteracting) {
    icon.className = getTailerClass(interactable.className);
  } else {
    icon.className = "";
  }
};
