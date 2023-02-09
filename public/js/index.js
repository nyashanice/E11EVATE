let i = 0;
let fullName = "Will Murray";
let speed = 200;
let buttonHolder = document.getElementById("enterButton");
let enterButton;

function typeWriter() {
  if (i < fullName.length) {
    document.getElementById("name").innerHTML += fullName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

enterButton = document.createElement("button");
enterButton.innerHTML = "ENTER";

enterButton.addEventListener("click", () => {
  console.log("clicked!");
});

document.body.appendChild(enterButton);

enterButton.style.backgroundColor = "#80BFED";
enterButton.style.textAlign = "center";
