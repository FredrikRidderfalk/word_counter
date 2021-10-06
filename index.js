// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const userInput = document.querySelector("[name='user-input']");
const wordCounter = document.querySelector(".word-counter");
const characterCounter = document.querySelector(".character-counter");
const longestWordCount = document.querySelector(".longest-word-count");
const longestWordIdentifyer = document.querySelector(
  ".longest-word-identifyer"
);

// word counter
const wordCount = (str) => {
  if (userInput.value != "") {
    return str.match(/(\w+)/g).length;
  }
};

// character counter
const characterCount = (str) => {
  if (userInput.value != "") {
    return str.match(/(.)/g).length;
  }
};

// longest word counter
const countLongestWord = (str) => {
  if (userInput.value != "") {
    const strSplit = str.split(" ");
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length;
      }
    }
    return longestWord;
  }
};

countLongestWord(userInput.value);

// longest word identifyer
function findLongestWord(str) {
  if (userInput.value != "") {
    const strSplit = str.split(" ");
    let longestWord = strSplit.sort(function (a, b) {
      return b.length - a.length;
    });
    return longestWord[0];
  }
}

// event listener for all components

userInput.addEventListener("keyup", () => {
  wordCounter.textContent = wordCount(userInput.value);
  characterCounter.textContent = characterCount(userInput.value);
  longestWordCount.textContent = countLongestWord(userInput.value);
  longestWordIdentifyer.textContent = findLongestWord(userInput.value);
});
