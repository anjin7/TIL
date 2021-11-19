const title = document.querySelector("h2");

const eventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is over here!";
    title.style.color = "#1abc9c";
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is out!";
    title.style.color = "#3498db";
  },
  handleResize: function () {
    title.innerText = "Resized!";
    title.style.color = "#9b59b6";
  },
  handleContextMenu: function () {
    title.innerText = "A right click!";
    title.style.color = "#e74c3c";
  }
};

title.addEventListener("mouseenter", eventHandler.handleMouseEnter);
title.addEventListener("mouseleave", eventHandler.handleMouseLeave);
window.addEventListener("resize", eventHandler.handleResize);
window.addEventListener("contextmenu", eventHandler.handleContextMenu);
