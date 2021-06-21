var btnArrow = document.querySelector(".arrow-js");
var btnX = document.querySelector(".x-js");
var secondaryTransition = document.querySelector(".secondary-js");

btnArrow.addEventListener("click", function () {
  btnArrow.classList.add("btn--arrow-transform");
  secondaryTransition.classList.add("secondary-transform");
})

btnX.addEventListener("click", function () {
  btnArrow.classList.remove("btn--arrow-transform");
  secondaryTransition.classList.remove("secondary-transform");
})

console.log(btnArrow, btnX, secondaryTransition);
