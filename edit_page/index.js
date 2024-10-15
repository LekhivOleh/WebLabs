import {
    getInputValues,
    clearInputs,
    validateLampCardData
} from "../util.js";

const saveButton = document.getElementById("submit_button");

function saveButtonClick(event) {
    event.preventDefault();
    const { manufacturers, power, amount_of_lamps } = getInputValues();
    if (validateLampCardData(manufacturers, power, amount_of_lamps)) {
        clearInputs();
    } else {
        alert('Something is wrong with the given data');
    }
}



saveButton.addEventListener("click", saveButtonClick);