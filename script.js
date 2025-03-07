// container 9 dynamic styling
const btn = document.querySelector(".btn9");

btn.addEventListener("mouseover", (event) => {
  let posX = event.pageX - event.target.offsetLeft;
  let posY = event.pageY - event.target.offsetTop;
  let color = Math.floor(Math.random() * 0xffffff).toString(16);

  btn.style.setProperty("--x", posX + "px");
  btn.style.setProperty("--y", posY + "px");
  btn.style.setProperty("--bgcolor", "#" + color);
});

// container 10 dynamic styling
const card10 = document.querySelector(".card10");

card10.addEventListener("click", (event) => {
  let posX = event.pageX - event.target.offsetLeft;
  let posY = event.pageY - event.target.offsetTop;
  let color = Math.floor(Math.random() * 0xffffff).toString(16);
  console.log(posX + " " + posY + " " + color);

  let span = document.createElement("span");
  span.style.top = posY + "px";
  span.style.left = posX + "px";
  span.style.border = "2px solid #" + color;
  card10.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 2000);
});

const card13 = document.querySelector(".card13");

card13.addEventListener(
  "click",
  (e) => (card13.style.border = "2px solid black")
);

const card14 = document.querySelector(".card14");

const cursor = document.querySelector(".cursor");

card14.addEventListener("mousemove", (e) => {
  const rect = card14.getBoundingClientRect();
  let posX = e.clientX - rect.left;
  let posY = e.clientY - rect.top;

  cursor.style.transition = "none";

  cursor.style.clipPath = `circle(20% at ${posX}px ${posY}px)`;

  console.log(posX + " " + posY);
});
card14.addEventListener("click", (e) => {
  cursor.style.transition = "all .3s ease-in-out";
  cursor.style.clipPath = `circle(100%)`;
});
card14.addEventListener("mouseleave", (e) => {
  cursor.style.transition = "none";
});

const card16 = document.querySelector(".card16");

card16.addEventListener("mousemove", (e) => {
  const rect = card16.getBoundingClientRect();

  let posX = e.clientX - rect.left;
  let posY = e.clientY - rect.top;

  const rotationX = ((posY - rect.height / 2) / rect.height) * 30;
  const rotationY = ((posX - rect.width / 2) / rect.width) * 30;

  card16.style.setProperty("--rotateX", rotationX + "deg");
  card16.style.setProperty("--rotateY", rotationY + "deg");
});

card16.addEventListener("mouseleave", (e) => {
  card16.style.setProperty("--rotateX", "0deg");
  card16.style.setProperty("--rotateY", "0deg");
});

const card19 = document.querySelector(".card19");

const rect = card19.getBoundingClientRect();

console.log("====================================");
console.log(rect);
console.log("====================================");
