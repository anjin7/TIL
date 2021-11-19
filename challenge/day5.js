const body = document.querySelector("body");
body.innerHTML = "<h2>Hello!</h2>";
body.style.color = "#fff";
body.style.fontWeight = "700";

function handleResize() {
  if (window.innerWidth < 500) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth >= 500 && window.innerWidth < 1000) {
    body.style.backgroundColor = "lightpink";
  } else {
    body.style.backgroundColor = "plum";
  }
}

window.addEventListener("resize", handleResize);