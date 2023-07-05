const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const current_0 = document.querySelector("#current--0");
const current_1 = document.querySelector("#current--1");
const score_0 = document.querySelector("#score--0");
const score_1 = document.querySelector("#score--1");
const news = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");

let totalScore, currentScore, activePlayer;

init();
function randomNumberGen() {
  return Math.floor(Math.random() * 6) + 1;
}

function querySelector(cl_id) {
  return document.querySelector(cl_id);
}

function init() {
  roll.addEventListener("click", rollDice);
  hold.addEventListener("click", holdDice);

  dice.classList.add("hidden");
  currentScore = 0;
  current_0.innerHTML = 0;
  current_1.innerHTML = 0;
  score_0.innerHTML = 0;
  score_1.innerHTML = 0;
  totalScore = [0, 0];
  activePlayer = 0;
  querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
  const hasClass = player_0.classList.contains("player--active");
  if (!hasClass) {
    player_1.classList.remove("player--active");
    player_0.classList.add("player--active");
  }
}

function switchPlayer() {
  querySelector(`#current--${activePlayer}`).innerHTML = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
}
news.addEventListener("click", init);
function rollDice() {
  // const hasClass = player_0.classList.contains("player--active");
  const dicedNum = randomNumberGen();

  dice.src = `dice-${dicedNum}.png`;
  dice.classList.remove("hidden");

  if (dicedNum === 1) {
    querySelector(`.player--${activePlayer}`).classList.toggle(
      "player--active"
    );

    switchPlayer();
    return;
    // if (hasClass) {
    // player_0.classList.toggle("player--active");
    // player_1.classList.toggle("player--active");
    //   current_0.innerHTML = 0;
    //   return;
    // } else {
    //   player_1.classList.toggle("player--active");
    //   player_0.classList.toggle("player--active");
    //   current_1.innerHTML = 0;
    //   return;
    // }
  }

  currentScore += dicedNum; //currentScore = currentScore + dicedNum
  querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
  // if (hasClass) {
  //   const number = current_0.innerHTML;
  //   current_0.innerHTML = Number(number) + dicedNum;
  // }
  // if (!hasClass) {
  //   const number = current_1.innerHTML;
  //   current_1.innerHTML = Number(number) + dicedNum;
  // }
}

function holdDice() {
  console.log(this);
  totalScore[activePlayer] += currentScore;
  querySelector(`#score--${activePlayer}`).innerHTML = totalScore[activePlayer];

  if (totalScore[activePlayer] >= "100") {
    querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    roll.removeEventListener("click", rollDice);
    hold.removeEventListener("click", holdDice);
    return;
  }

  querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
  switchPlayer();

  // const hasClass = player_0.classList.contains("player--active");
  // if (hasClass) {
  // const number = current_0.innerHTML;
  // totalScore_0 = totalScore_0 + Number(number);
  // score_0.innerHTML = totalScore_0;
  //   if (totalScore_0 >= "100") {
  //     console.log("s");
  //     player_0.classList.add("player--winner");
  //     roll.removeEventListener("click", rollDice);
  //     hold.removeEventListener("click", holdDice);
  //     return;
  //   }
  //   player_0.classList.remove("player--active");
  //   player_1.classList.add("player--active");

  //   current_0.innerHTML = 0;
  // } else {
  //   const number = current_1.innerHTML;
  //   totalScore_1 = totalScore_1 + Number(number);
  //   score_1.innerHTML = totalScore_1;
  //   if (totalScore_1 >= "100") {
  //     player_1.classList.add("player--winner");
  //     roll.removeEventListener("click", rollDice);
  //     hold.removeEventListener("click", holdDice);
  //     return;
  //   }
  //   player_1.classList.remove("player--active");
  //   player_0.classList.add("player--active");
  //   current_1.innerHTML = 0;
  // }
}
