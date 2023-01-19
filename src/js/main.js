// 1: По натисканню кнопки alt ми зменьшуемо єлемент але не меньше його розміру
// 2: Екстра, робити не більше довжини єкрану

const box = document.querySelector(".box");
let boxWidth = box.offsetWidth;
let boxHeight = box.offsetHeight;
const step = 5;

box.addEventListener("click", function (event) {
  if (event.altKey) {
    if (boxWidth < 130) {
      box.innerHTML = "";
    } else {
      box.innerHTML = `<div class="boxWidth">boxWidth: ${boxWidth}</div>
        <div class="clientWidth">clientWidth: ${document.documentElement.clientWidth}</div>`;
    }
    if (boxWidth > 10) {
      box.style.width = `${(boxWidth = boxWidth - step)}px`;
    }
  } else {
    if (boxWidth > 130) {
      box.innerHTML = `<div class="boxWidth">boxWidth: ${boxWidth}</div>
      <div class="clientWidth">clientWidth: ${document.documentElement.clientWidth}</div>`;
    }
    if (boxWidth < document.documentElement.clientWidth - step * 2) {
      box.style.width = `${(boxWidth = boxWidth + 10)}px`;
    }
  }
});
