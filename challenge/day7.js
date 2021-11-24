const gameForm = document.querySelector("#game");

const rangeInput = document.querySelector("#range input");
const guessInput = document.querySelector("#guess input");

const gamePlay = document.querySelector("#play");
const gameCompare = document.querySelector("#play .game--compare");
const gameResult = document.querySelector("#play .game--result");

const HIDDEN_CLASSNAME = "hidden";

function onResultSubmit(event) {
  event.preventDefault();
  gamePlay.classList.remove(HIDDEN_CLASSNAME);

  const rangeNum = rangeInput.value;
  const guessNum = parseInt(guessInput.value, 10);
  const randomNum = Math.ceil(Math.random() * rangeNum);

  gameCompare.innerText = `You chose: ${guessNum}, the machine chose: ${randomNum}`;
  if (guessNum === randomNum) {
    gameResult.innerText = "You Won!";
  } else {
    gameResult.innerText = "You Lost!";
  }
}

gameForm.addEventListener("submit", onResultSubmit);