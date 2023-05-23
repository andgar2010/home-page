// Cursor Color Blur
const cursorColor = document.getElementById("cursor-color");
document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;
  cursorColor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`,
  }, { duration: 1000, fill: "forwards" });
};
;
if (3 > window.location.pathname.split('/').length) {
  document.body.style.overflow = "clip";
} else {
  document.body.style.overflowX = "hidden";
}

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const { clientX, clientY } = e;
  const x = clientX - trailer.offsetWidth / 2,
    y = clientY - trailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2.5 : 0.75})`,
    opacity: `${interacting ? 0.5 : 1}`
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
  const interactable = e.target.closest("a"),
    interacting = interactable !== null;
  const icon = document.getElementById("trailer-icon");
  animateTrailer(e, interacting);
  trailer.className = interacting ? interactable.className : "";
  if (interacting) {
    icon.className = getTailerClass(interactable.className);
  } else {
    icon.className = "";
  }
};

;
window.onload = () => {
  const letters = 'aábcdeéfghiíjklmnñoópqrstuúvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ ';
  let interval = null;
  let currentWordSelector = document.querySelector('h1');
  let currentWord = currentWordSelector.textContent.trim();
  currentWordSelector.dataset.value = currentWord;
  if (currentWordSelector.children.length >= 1) {
    currentWordSelector.children[0].dataset.value = currentWord;
  }
  document.querySelector("h1").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      let target = event.target;
      let word = target.innerText;
      if (word.length !== currentWord.length) {
        word = target.innerHTML;
      }
      let output = word.split('')
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
      event.target.innerText = output;
    }, 30);
  };
};