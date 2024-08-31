import paragraphs from "./database.js";

const form = document.querySelector("form");
const paragraphText = document.querySelector(".paragraph");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector(`input[type="number"]`);
    
    let value = +input.value;

    if (value <= 0 || value > 9) {
        const randomNumber = Math.floor(Math.random() * 9);
        paragraphText.innerHTML = `<p>${paragraphs[randomNumber]}</p>`;
        console.log(randomNumber)
    }
    else {
        let paraText = paragraphs.slice(0, value);
        const text = paraText.map((para) => {
            return `<p>${para} </p>`;
        }).join("");
        paragraphText.innerHTML = text;
    }

});