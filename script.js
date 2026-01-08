const textareaEL = document.querySelector(".textarea");
const chracterValueEl = document.querySelector(".stat-number-characters");
const wordValueEl = document.querySelector(".stat-number-word");
const twitterValueEl = document.querySelector(".stat-number-twitter");
const facebookValueEl = document.querySelector(".stat-number-facebook");
textareaEL.addEventListener("input", function () {
  if (textareaEL.value.includes("<script>")) {
    alert("You can not use <script>!");
    textareaEL.value = textareaEL.value.replace("<script>", "");
  }
  let numberOfWords = textareaEL.value.split(" ").length;
  const numberOfCharacter = textareaEL.value.length;
  twtrCharsleft = 280 - numberOfCharacter;
  fcbkcharsleft = 2200 - numberOfCharacter;
  chracterValueEl.textContent = numberOfCharacter;
  twitterValueEl.textContent = twtrCharsleft;
  facebookValueEl.textContent = fcbkcharsleft;
  wordValueEl.textContent = numberOfWords;
  if (numberOfCharacter > 280) {
    twitterValueEl.classList.add("yellowTextColor");
  } else {
    twitterValueEl.classList.remove("yellowTextColor");
  }
  if (numberOfCharacter > 2200) {
    facebookValueEl.classList.add("yellowTextColor");
  } else {
    facebookValueEl.classList.remove("yellowTextColor");
  }
  if (textareaEL.value.length == 0) {
    wordValueEl.textContent = 0;
  }
});
