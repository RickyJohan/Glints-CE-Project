const checkbox = document.getElementById('checkbox');
const container = document.querySelector('.container');
const label = document.querySelector('.label');
const header = document.querySelector ('header');
const ball = document.querySelector('.ball');
const hamburgerButton = document.querySelectorAll ('.line');
const text = document.querySelector ('#body');

checkbox.addEventListener ('click', () =>{
  //change the website theme
  container.classList.toggle('dark');
  //change button theme
  label.classList.toggle('dark');
  //change header theme
  header.classList.toggle('dark-2');
  //change button theme
  ball.classList.toggle('dark-3');
  //change hamburger button line theme
  for (let i = 0; i < hamburgerButton.length; i++){
    hamburgerButton[i].classList.toggle('dark-4');
  };
  //change the text color to white
  text.classList.toggle('white');
});

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector (".nav-bar");

menuIcon.addEventListener("click", () => {
  //open navbar
  navbar.classList.toggle("change");
  //make hamburger button sliding
  menuIcon.classList.toggle("slide");
//make body smaller
for (let i = 0; i < text.length; i++){
  text[i].classList.toggle('size');
};
});
