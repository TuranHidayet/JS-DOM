let containerTest = document.querySelector(".container");
console.log(containerTest);

const colors = ["blue", "yellow", "black", "green", "purple", "gray", "pink", "orange", "light"];

let currentIndex = 0; 

setInterval(() => {

    const randomIndex = generateRandomIndex(colors);
    containerTest.style.backgroundColor = colors[randomIndex]; 
}, 2000);


const generateRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
}