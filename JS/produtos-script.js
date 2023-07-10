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
      inline: "center"
    });

    itemsN[currentItemN].classList.add("current-itemN");
  });
});

const controlsI = document.querySelectorAll(".controlI");
let currentItemI = 0;
const itemsI = document.querySelectorAll(".itemI");
const maxItemsI = items.length;

controlsI.forEach((controlI) => {
  controlI.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
