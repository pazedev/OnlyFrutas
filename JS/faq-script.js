const faqMove = document.querySelectorAll(".faq-pergunta");
const spanSinal = document.querySelectorAll("span")

faqMove.forEach((spanSinal, i) => {
  spanSinal.addEventListener("click", () => {
    spanSinal.nextElementSibling.classList.toggle("active");

    const open = spanSinal.querySelector(".open");
    const close = spanSinal.querySelector(".close");

    if (spanSinal.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});