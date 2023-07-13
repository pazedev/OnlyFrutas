const controlsD = document.querySelectorAll(".controlD");
let currentItemD = 0;
const itemsD = document.querySelectorAll(".itemD");
const maxItemsD = itemsD.length;

controlsD.forEach((controlD) => {
  controlD.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItemD -= 1;
    } else {
      currentItemD += 1;
    }

    if (currentItemD >= maxItemsD) {
      currentItemD = 0;
    }

    if (currentItemD < 0) {
      currentItemD = maxItemsD - 1;
    }

    itemsD.forEach((item) => item.classList.remove("current-itemD"));

    itemsD[currentItemD].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    itemsD[currentItemD].classList.add("current-itemD");
  });
});

setInterval(e, 1000);