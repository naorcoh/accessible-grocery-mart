const slider = document.querySelector("[data-slider]");

const nextButton = document.querySelector("[data-next-button]");
const prevButton = document.querySelector("[data-prev-button]");
const cloneItem = document.querySelector("[data-clone-item]");
const container = document.querySelector("[data-container]");
const liElement = slider.children;

const sLeft = slider.getBoundingClientRect().left + window.scrollX;
const sRight = slider.getBoundingClientRect().right + window.scrollX;

const itemWidthLeft =
  liElement[2].getBoundingClientRect().left + window.scrollX;
const itemWidthRight =
  liElement[4].getBoundingClientRect().right + window.scrollX;

const pixelLeft = itemWidthLeft + sLeft;
const pixelRight = itemWidthRight + sRight + 8;
const sliderWidth = slider.getBoundingClientRect().width;
const min = pixelRight - sliderWidth - pixelLeft;

const moveLeft = liElement[2].getBoundingClientRect().left + window.scrollX;
const moveRight = liElement[5].getBoundingClientRect().right + window.scrollX;

const pixelLeft1 = moveLeft + sLeft;
const pixelRight2 = moveRight + sRight;

const pixelToMove = pixelRight2 - sliderWidth - pixelLeft1;

console.log(liElement[3].clientWidth);
console.log(liElement[3].scrollWidth);
console.log("lol " + slider.getBoundingClientRect());
console.log("off " + min);

function setWidth(el, pixel) {
  el.style.width = pixel + "px";
}

function setHeight(el, pixel) {
  el.style.height = pixel + "px";
}

function calculate(params) {}

setWidth(container, min);
setHeight(container, slider.getBoundingClientRect().height);

let dir = 0;

console.log(slider.getBoundingClientRect());

console.log();

nextButton.addEventListener("click", () => {
  dir = 1;
  slider.style.transform = `translateX(-${min}px)`;
});

prevButton.addEventListener("click", () => {
  dir = -1;
  slider.style.transform = `translateX(420.333px)`;
});

slider.addEventListener("transitionend", () => {
  if (dir === 1) {
    slider.style.transition = "none";

    requestAnimationFrame(() => {
      slider.append(slider.children[0], slider.children[1], slider.children[2]);
    });

    // slider.style.left = "50%";

    slider.style.transform = "translateX(0%)";

    setTimeout(() => {
      slider.style.transition = "transform 0.7s ease";
    });
    dir = 0;
  } else if (dir === -1) {
    slider.style.transition = "none";

    for (let index = 0; index < 2; index++) {
      slider.prepend(
        slider.children[slider.children.length - 1]
        // slider.children[slider.children.length - 2]
        // slider.children[slider.children.length - 3]
      );
    }

    slider.style.transform = "translateX(0)";

    setTimeout(() => {
      slider.style.transition = "transform 0.7s ease";
    });

    dir = 0;
  }
});

// touch
const ongoingTouches = [];
let diff = 0;

slider.addEventListener("touchstart", handleTouchStart);
slider.addEventListener("touchmove", handleTouchMove, { passive: true });
// slider.addEventListener("touchend", handleEnd);

// function handleStart(evt) {
//   // evt.preventDefault();
//   const touches = evt.changedTouches;

//   for (let i = 0; i < touches.length; i++) {
//     ongoingTouches.push(copyTouch(touches[i]));
//   }
// }

// function handleMove(evt) {
//   // evt.preventDefault();

//   const touches = evt.changedTouches;
//   const slider = document.querySelector("[data-slider]");

//   for (let i = 0; i < touches.length; i++) {
//     const idx = ongoingTouchIndexById(touches[i].identifier);
//     //move slider to on x
//     if (idx >= 0) {
//       console.log("start touch " + ongoingTouches[idx].pageX);

//       console.log("move touch " + touches[idx].pageX);

//       console.log(
//         "diff " + (touches[idx].pageX - ongoingTouches[idx].pageX) + "px"
//       );

//       diff += touches[idx].pageX - ongoingTouches[idx].pageX;

//       // slider.style.transform = `translateX(${diff}px)`;
//       console.log(Math.abs(diff));

//       container.scrollBy(Math.abs(diff), 0);

//       ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
//     }
//   }
// }

// function handleEnd(evt) {
//   // evt.preventDefault();
//   console.log("touch end work");
//   const touches = evt.changedTouches;

//   for (let i = 0; i < touches.length; i++) {
//     let idx = ongoingTouchIndexById(touches[i].identifier);

//     if (idx >= 0) {
//       ongoingTouches.splice(idx, 1); // remove it; we're done
//     }
//   }
// }

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  let leftDiff = 0;
  let rightDiff = 0;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* right swipe */
      rightDiff += xDiff;
      console.log("right" + rightDiff);
      container.scroll(rightDiff, 0);
    } else {
      /* left swipe */
      leftDiff += xDiff;

      console.log("left" + leftDiff);
      container.scrollBy(-400, 0);
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;
    if (id === idToFind) {
      return i;
    }
  }

  return -1;
}

function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
