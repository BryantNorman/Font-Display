// Display.js
document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const outputText1 = document.getElementById("outputText1");
    const outputText2 = document.getElementById("outputText2");
    const outputText3 = document.getElementById("outputText3");
    const outputText4 = document.getElementById("outputText4");

    textInput.addEventListener("input", function () {
        const inputValue = textInput.value;
        outputText1.textContent = inputValue;
        outputText2.textContent = inputValue;
        outputText3.textContent = inputValue;
        outputText4.textContent = inputValue;
    });
});
