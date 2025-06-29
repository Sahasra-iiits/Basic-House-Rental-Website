const buttons = document.querySelectorAll(".btn");
const tags = document.querySelectorAll(".tag");
const boxes = document.querySelectorAll(".box");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#eaefef";
    button.style.color = "#333446";
    button.style.border = "2px solid #333446";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.border = "";
  });
});

tags.forEach((tag) => {
  tag.addEventListener("mouseover", () => {
    tag.style.textDecoration = "underline";
  });

  tag.addEventListener("mouseout", () => {
    tag.style.textDecoration = "";
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "#333446";
    box.style.color = "#eaefef";
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
    box.style.color = "";
  });
});
