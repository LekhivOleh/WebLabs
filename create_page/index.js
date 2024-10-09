import { getInputValues, clearInputs, validateLampCardData } from "../util.js";

const submitButton = document.getElementById("submit_button");

function submitButtonClick(event) {
    event.preventDefault();
    const { manufacturers, power, amount_of_lamps } = getInputValues();
    if (validateLampCardData(manufacturers, power, amount_of_lamps)) {
        clearInputs();
    } else {
        alert('Something is wrong with the given data');
    }
}

submitButton.addEventListener("click", submitButtonClick);