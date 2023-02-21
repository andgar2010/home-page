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