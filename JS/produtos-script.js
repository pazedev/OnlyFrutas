const controlsN = document.querySelectorAll(".controlN");
let currentItemN = 0;
const itemsN = document.querySelectorAll(".itemN");
const maxItemsN = itemsN.length;

controlsN.forEach((controlN) => {
  controlN.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItemN -= 1;
    } else {
      currentItemN += 1;
    }

    if (currentItemN >= maxItemsN) {
      currentItemN = 0;
    }

    if (currentItemN < 0) {
      currentItemN = maxItemsN - 1;
    }

    itemsN.forEach((item) => item.classList.remove("current-itemN"));

    itemsN[currentItemN].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    itemsN[currentItemN].classList.add("current-itemN");
  });
});

const controlsI = document.querySelectorAll(".controlI");
let currentItemI = 0;
const itemsI = document.querySelectorAll(".itemI");
const maxItemsI = itemsI.length;

controlsI.forEach((controlI) => {
  controlI.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItemI -= 1;
    } else {
      currentItemI += 1;
    }

    if (currentItemI >= maxItemsI) {
      currentItemI = 0;
    }

    if (currentItemI < 0) {
      currentItemI = maxItemsI - 1;
    }

    itemsI.forEach((item) => item.classList.remove("current-itemI"));

    itemsI[currentItemI].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    itemsI[currentItemI].classList.add("current-itemI");
  });
});
