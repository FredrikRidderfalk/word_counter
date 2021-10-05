// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const userInput = document.querySelector("[name='user-input']");
const wordCounter = document.querySelector(".word-counter");
const characterCounter = document.querySelector(".character-counter");
const longestWord = document.querySelector(".longest-word");
const languageIdentifyer = document.querySelector(".language-identifyer");

// word counter
const wordCount = (str) => {
  return str.split(" ").length;
};

userInput.addEventListener("keyup", () => {
  wordCounter.textContent = wordCount(userInput.value);
});

// character counter
const characterCount = (str) => {
  return str.length;
};

userInput.addEventListener("keyup", () => {
  characterCounter.textContent = wordCount(userInput.value);
});
