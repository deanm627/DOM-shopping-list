'use strict';
const button = document.querySelector("#generateList");
const inputs = document.querySelectorAll(".input");
const list = document.querySelectorAll(".listItem");

function listGenerator() {
    const inputArr = [];
    inputs.forEach(function(userInput) {
        inputArr.push(document.getElementById(userInput.id).value);
    });
    list.forEach(function(item, index) {
        item.innerHTML = inputArr[index];
    });
    document.getElementById("form").reset();
};

button.addEventListener("click", (event) => {
    event.preventDefault();
    listGenerator();
});