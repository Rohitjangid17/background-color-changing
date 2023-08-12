const button = document.querySelector("button");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");

const colors = [
  "black",
  "red",
  "pink",
  "blue",
  "green",
  "lightGray",
  "lightblue",
  "yellow",
  "SlateBlue",
  "Violet",
  "MediumSeaGreen",
  "Orange",
];

const changeBackground = () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  const bodycolor = (body.style.backgroundColor = colors[colorIndex]);

  // THIS CONDITION FOR BUTTON COLOR & HEADING COLOR CHANGE
  if (bodycolor == "black") {
    button.style.color = "black";
    button.style.backgroundColor = "white";
    heading.style.color = "white";
  } else if (bodycolor === "red") {
    button.style.color = "black";
    button.style.backgroundColor = "white";
    heading.style.color = "black";
  } else if (bodycolor === "pink") {
    button.style.color = "white";
    button.style.backgroundColor = "#1CD6CE";
    heading.style.color = "black";
  } else if (bodycolor === "blue") {
    button.style.color = "black";
    button.style.backgroundColor = "#B1E1FF";
    heading.style.color = "black";
  } else if (bodycolor === "green") {
    button.style.color = "black";
    button.style.backgroundColor = "#B1E1FF";
    heading.style.color = "black";
  } else if (bodycolor === "lightGray") {
    button.style.color = "white";
    button.style.backgroundColor = "black";
    heading.style.color = "black";
  } else if (bodycolor === "lightblue") {
    button.style.color = "white";
    button.style.backgroundColor = "black";
    heading.style.color = "black";
  } else if (bodycolor === "yellow") {
    button.style.color = "black";
    button.style.backgroundColor = "#59CE8F";
    heading.style.color = "black";
  } else if (bodycolor === "SlateBlue") {
    button.style.color = "black";
    button.style.backgroundColor = "#59CE8F";
    heading.style.color = "black";
  } else if (bodycolor === "Violet") {
    button.style.color = "black";
    button.style.backgroundColor = "#E2DCC8";
    heading.style.color = "black";
  } else if (bodycolor === "MediumSeaGreen") {
    button.style.color = "black";
    button.style.backgroundColor = "#F2DF3A";
    heading.style.color = "black";
  } else {
    button.style.color = "black";
    button.style.backgroundColor = "#FFF9CA";
    heading.style.color = "black";
  }
}
