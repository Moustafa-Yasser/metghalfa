// view menu
document.getElementById("open").addEventListener("click", () => {
  document.getElementById("list").style = "transform:translateX(0%);";
  document.querySelector(".all").style = "filter: brightness(0.5);;";
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("list").style.transform = "translateX(100%)";
  document.querySelector(".all").style = "filter: brightness(1);";
});
document.querySelector(".all").addEventListener("click", () => {
  document.getElementById("list").style.transform = "translateX(100%)";
  document.querySelector(".all").style = "filter: brightness(1);";
});
// view product
// let boxes = document.querySelectorAll(".box");
// boxes.forEach((e) => {
//   e.addEventListener("click", function () {
//     e.style = "min-width: 100%;";
//     e.children[0].style = "width: 75%;";
//     e.children[1].style = "max-width: 100%;";
//   });
// });
