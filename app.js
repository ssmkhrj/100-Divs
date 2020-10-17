for (let i = 0; i < 97; i++) {
  const div = document.createElement("div");
  div.classList.add("triangle");
  addStyles(div);
  document.body.appendChild(div);
}

const triangleDivs = document.querySelectorAll("div");

setInterval(() => {
  triangleDivs.forEach((el) => {
    if (
      el.classList.contains("card") ||
      el.classList.contains("card__image") ||
      el.classList.contains("card__heading")
    ) {
      return;
    }
    addStyles(el);
  });
}, 1600);

function addStyles(el) {
  el.style.top = Math.random() * 100 + "%";
  el.style.left = Math.random() * 100 + "%";

  const temp = Math.random() * 50 + 20;
  el.style.width = temp + "px";
  el.style.height = temp + "px";

  el.style.transform = `scale(${Math.random() + 0.5})`;
}
