// HOME

let homeScoreBtnOne = document.getElementById(
  "home-score-btn-1",
  "home-score-btn-2",
  "home-score-btn-3"
);

let homeStoreEl = document.getElementById("home-score");
let homeScore = 0;

function increaseHomeScoreOne() {
  homeScore++;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
  homeScore += 3;
  homeStoreEl.textContent = homeScore;
}

// GUEST

let guestScoreBtnOne = document.getElementById(
  "guest-score-btn-1",
  "guest-score-btn-2",
  "guest-score-btn-3"
);

let guestStoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseGuestScoreOne() {
  guestScore++;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}

// CLEAR COUNT

function clearAll() {
  homeScore = 0;
  homeStoreEl.textContent = homeScore;

  guestScore = 0;
  guestStoreEl.textContent = guestScore;
}
