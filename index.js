// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const userInput = document.querySelector(".user-input");
const wordCounter = document.querySelector(".word-counter");
const characterCounter = document.querySelector(".character-counter");
const longestWord = document.querySelector(".longest-word");
const languageIdentifyer = document.querySelector(".language-identifyer");

// word counter
const wordCount = (str) => {
  return str.split(" ").length;
};

console.log(wordCount("hello world"));

const displayWordCount = () => {
  wordCounter.textContent = wordCount(
    "but everything changed when the firenation attacked"
  );
};

displayWordCount();

// character counter
