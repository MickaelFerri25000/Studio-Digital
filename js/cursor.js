const cursorArround = document.getElementById("cursor_arround");

const moveCursor = ({ clientX, clientY }) => {
  cursorArround.style.display = "block";
  cursorArround.style.left = `${clientX - cursorArround.offsetWidth / 2}px`;
  cursorArround.style.top = `${clientY - cursorArround.offsetHeight / 2}px`;
};

const mouseX = document.addEventListener("mousemove", moveCursor);