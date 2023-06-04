function openTab(tabName) {
  var i;

  const x = document.getElementsByClassName("tabElement");
  const tab = document.querySelector("[tabElement]");
  const style = getComputedStyle(tab);
  let display = style.display;

  console.log(display);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = display;
}

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const mediaScrollerButtons = document.querySelectorAll(
  "[data-media-scroller-button]"
);

// let newIndex = 0;
// mediaScrollerButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const mediaScrollerUl = document.querySelector("#media-scroller-ul");
//     const liItem = mediaScrollerUl.querySelectorAll("li");
//     let offset = button.dataset.mediaScrollerButton === "next" ? 1 : -1;
//     const activeMedia = mediaScrollerUl.querySelector("[data-active]");
//     newIndex += [...mediaScrollerUl.children].indexOf(activeMedia) + offset;
//     let buttonsIndex =
//       [...mediaScrollerUl.children].indexOf(activeMedia) + offset;

//     if (buttonsIndex > 0) {
//       if (newIndex === 1) {
//         mediaScrollerUl.appendChild(liItem[0]);
//         mediaScrollerUl.appendChild(liItem[1]);
//         mediaScrollerUl.appendChild(liItem[2]);
//       } else if (newIndex === 2) {
//         mediaScrollerUl.appendChild(liItem[0]);
//         mediaScrollerUl.appendChild(liItem[1]);
//       } else if (newIndex === 3) {
//         mediaScrollerUl.appendChild(liItem[0]);
//         mediaScrollerUl.appendChild(liItem[1]);
//         mediaScrollerUl.appendChild(liItem[2]);
//         newIndex = 0;
//       }

//       mediaScrollerUl.children[0].dataset.active = true;
//       delete activeMedia.dataset.active;
//       mediaScrollerUl.children[0].scrollIntoView();
//     }

//     if (buttonsIndex < 0) {
//       console.log(buttonsIndex);
//       if (newIndex === -1) {
//         mediaScrollerUl.insertBefore(liItem[7], mediaScrollerUl.firstChild);
//         mediaScrollerUl.insertBefore(liItem[6], mediaScrollerUl.firstChild);
//         mediaScrollerUl.insertBefore(liItem[5], mediaScrollerUl.firstChild);
//       } else if (newIndex === -2) {
//         mediaScrollerUl.insertBefore(liItem[7], mediaScrollerUl.firstChild);
//         mediaScrollerUl.insertBefore(liItem[6], mediaScrollerUl.firstChild);
//       } else if (newIndex === -3) {
//         mediaScrollerUl.insertBefore(liItem[7], mediaScrollerUl.firstChild);
//         mediaScrollerUl.insertBefore(liItem[6], mediaScrollerUl.firstChild);
//         mediaScrollerUl.insertBefore(liItem[5], mediaScrollerUl.firstChild);
//         newIndex = 0;
//       }

//       mediaScrollerUl.children[0].dataset.active = true;
//       delete activeMedia.dataset.active;
//       mediaScrollerUl.children[0].scrollIntoView();
//     }
//   });
// });

// let newIndex = 0;
// console.log(Math.round(5 / 3));

// mediaScrollerButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const mediaScrollerUl = document.querySelector("#media-scroller-ul");
//     const liItem = mediaScrollerUl.querySelectorAll("li");
//     let offset = button.dataset.mediaScrollerButton === "next" ? 1 : -1;
//     const activeMedia = mediaScrollerUl.querySelector("[data-active]");
//     newIndex += offset;
//     let buttonsIndex =
//       [...mediaScrollerUl.children].indexOf(activeMedia) + offset;
//     let nItemToView = 3;
//     let itemToMove = 3;
//     let elIndices = mediaScrollerUl.children.length - 1;

//     let restIterations = Math.round(elIndices / nItemToView);

//     if (newIndex > restIterations) {
//       console.log("rest: " + restIterations);

//       newIndex = 0;
//     }

//     if (buttonsIndex > 0) {
//       if (newIndex >= 2 && newIndex < 3) {
//         console.log("i am if!! statement and my index is: " + newIndex);
//         console.log("i scroll 2 product!");

//         mediaScrollerUl.append(liItem[0]);
//         // mediaScrollerUl.append(liItem[1]);
//       } else {
//         console.log("i am else statement and my index is: " + newIndex);
//         console.log("i scroll 3 product!");

//         mediaScrollerUl.append(liItem[0]);
//         mediaScrollerUl.append(liItem[1]);
//         mediaScrollerUl.append(liItem[2]);
//       }
//       mediaScrollerUl.children[0].dataset.active = true;
//       delete activeMedia.dataset.active;
//       mediaScrollerUl.children[0].scrollIntoView();
//     }
//   });
// });

// let currentIterations = 0;
// let numberOfItemPerIter = 0;

// mediaScrollerButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const mediaScrollerUl = document.querySelector("#media-scroller-ul");
//     const liItem = mediaScrollerUl.querySelectorAll("li");
//     let offset = button.dataset.mediaScrollerButton === "next" ? 1 : -1;
//     const activeMedia = mediaScrollerUl.querySelector("[data-active]");
//     currentIterations = 0;
//     let buttonsIndex =
//       [...mediaScrollerUl.children].indexOf(activeMedia) + offset;

//     let itemToMove = button.dataset.mediaScrollerButton === "next" ? 3 : -3;
//     const elIndices = mediaScrollerUl.children.length - 1;
//     const totalItemNum = mediaScrollerUl.children.length;

//     let restIterations = Math.round(elIndices / itemToMove);

//     let transPoint = totalItemNum - itemToMove;
//     let prevTransPoint = 3 + 1;
//     let itemAreEven = totalItemNum % itemToMove;

//     currentIterations += offset;
//     numberOfItemPerIter += itemToMove;

//     console.log("numberOfItemPerIter: " + numberOfItemPerIter);

//     if (currentIterations > 0) {
//       if (numberOfItemPerIter > transPoint && itemAreEven !== 0) {
//         let newItemToMove = transPoint - numberOfItemPerIter;
//         for (let index = 0; index < newItemToMove; index++) {
//           mediaScrollerUl.append(liItem[index]);
//         }
//       } else {
//         numberOfItemPerIter += itemToMove;
//         for (let index = 0; index < itemToMove; index++) {
//           mediaScrollerUl.append(liItem[index]);
//         }

//       }

//       mediaScrollerUl.children[0].dataset.active = true;
//       delete activeMedia.dataset.active;
//       mediaScrollerUl.children[0].scrollIntoView();
//     }

//     if (currentIterations < 0) {
//       console.log("number per item " + numberOfItemPerIter);
//       console.log("prev trans point " + prevTransPoint);

//       if (numberOfItemPerIter > prevTransPoint) {
//         console.log("TEST");
//       }
//     }
//   });
// });

// let currentIterations = 0;

// let numberOfItemPerIter = 3;

// mediaScrollerButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const mediaScrollerUl = document.querySelector("#media-scroller-ul");
//     const liItem = mediaScrollerUl.querySelectorAll("li");
//     let offset = button.dataset.mediaScrollerButton === "next" ? 1 : -1;
//     let itemToMove = button.dataset.mediaScrollerButton === "next" ? 3 : -3;
//     const totalItemNum = mediaScrollerUl.children.length;
//     let transPoint = totalItemNum - itemToMove * 2 + 1;
//     let endBoundary = totalItemNum - 3;
//     let prevTransPoint = itemToMove * -2;
//     let startBoundary = itemToMove * -3;
//     let itemAreEven = totalItemNum % itemToMove;

//     currentIterations += offset;

//     if (
//       currentIterations > 0 &&
//       numberOfItemPerIter >= transPoint &&
//       numberOfItemPerIter < endBoundary &&
//       itemAreEven !== 0
//     ) {
//       nextIsTrue = true;
//       let newItemToMove =
//         endBoundary - (numberOfItemPerIter - itemToMove) - itemToMove;

//       for (let i = 0; i < newItemToMove; i++) {
//         mediaScrollerUl.append(liItem[i]);
//       }

//       numberOfItemPerIter += 2;

//       mediaScrollerUl.children[0].scrollIntoView();
//     } else if (currentIterations > 0) {
//       numberOfItemPerIter += itemToMove;
//       if (numberOfItemPerIter > totalItemNum) {
//         numberOfItemPerIter = 3;
//       }
//       console.log("item per iter " + numberOfItemPerIter);
//       console.log("trans point " + transPoint);

//       for (let i = 0; i < itemToMove; i++) {
//         console.log(i);
//         mediaScrollerUl.append(liItem[i]);
//       }

//       mediaScrollerUl.children[0].scrollIntoView();
//     } else if (
//       currentIterations < 0 &&
//       numberOfItemPerIter < startBoundary &&
//       numberOfItemPerIter > prevTransPoint
//     ) {
//       numberOfItemPerIter += -2;

//       console.log("fuck");

//       console.log("start bounder " + startBoundary);
//       console.log("number Of Item Per Iter " + numberOfItemPerIter);
//       console.log("prev Trans Point " + prevTransPoint);

//       mediaScrollerUl.insertBefore(liItem[19], mediaScrollerUl.firstChild);
//       mediaScrollerUl.insertBefore(liItem[18], mediaScrollerUl.firstChild);
//     } else if (currentIterations < 0) {
//       numberOfItemPerIter += -3;
//       if (numberOfItemPerIter === 0) {
//         numberOfItemPerIter = 20;
//       }

//       console.log("*****************************************");

//       console.log("start bounder " + startBoundary);
//       console.log("number Of Item Per Iter " + numberOfItemPerIter);
//       console.log("prev Trans Point " + prevTransPoint);
//       console.log("*****************************************");

//       mediaScrollerUl.insertBefore(liItem[19], mediaScrollerUl.firstChild);
//       mediaScrollerUl.insertBefore(liItem[18], mediaScrollerUl.firstChild);
//       mediaScrollerUl.insertBefore(liItem[17], mediaScrollerUl.firstChild);
//     }

//     mediaScrollerUl.children[0].scrollIntoView();
//   });
// });

const mediaScrollerUl = document.querySelector("#media-scroller-ul");
const lastSlide = mediaScrollerUl.children.length - 1;
const lastItem = 18;
const clone = mediaScrollerUl.cloneNode(true);
const liItem = clone.querySelectorAll("li");

console.log(liItem);
let counter = 0;
let itemToMove = 0;

mediaScrollerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemToMove = button.dataset.mediaScrollerButton === "next" ? 3 : -3;
    console.log(" before scroll counter " + counter);

    // mediaScrollerUl.style.transform = "translateX(-40%)";

    counter += itemToMove;

    if ((counter >= 0) & (counter < mediaScrollerUl.children.length)) {
      console.log("scroll counter " + counter);

      mediaScrollerUl.children[counter].scrollIntoView({
        inline: "start",
      });
    } else if (counter >= 21) {
      mediaScrollerUl.children[0].scrollIntoView({
        inline: "start",
      });
      console.log("if counter" + counter);

      counter = 0;
    }

    if (counter < 0) {
      // mediaScrollerUl.children[lastSlide].scrollIntoView({
      //   inline: "end",
      // });
      counter = lastItem;
    }
  });
});

mediaScrollerUl.addEventListener("transitionend", () => {
  mediaScrollerUl.appendChild(mediaScrollerUl.firstChild);
  mediaScrollerUl.style.transition = "none";
  mediaScrollerUl.style.transform = "translateX(0)";

  setTimeout(() => {
    mediaScrollerUl.style.transition = "all 0.5s";
  });
});
