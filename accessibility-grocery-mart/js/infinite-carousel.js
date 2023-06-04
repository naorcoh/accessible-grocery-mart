const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  slider.style.transform = "translateX(-20%)";
});

slider.addEventListener("transitionend", () => {
  slider.appendChild(slider.firstChild);
  slider.style.transition = "none";
  slider.style.transform = "translateX(0)";

  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});

const buttons = document.querySelector("#next");
const container = document.querySelector(".container");

console.log(container);

buttons.addEventListener("click", () => {
  container.appendChild(container.children[1]);
  container.appendChild(container.children[2]);
  container.appendChild(container.children[3]);
});
console.log(buttons);
