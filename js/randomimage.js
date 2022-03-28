const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["palace1.jpg", "palace2.jpg", "palace3.jpg", "palace4.jpg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
    console.log(image);
    
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + [randomIndex];
}

