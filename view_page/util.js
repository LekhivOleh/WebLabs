const manufacturerInput = document.getElementById("manufacturer_input");
const powerInput = document.getElementById("power_input");
const amountInput = document.getElementById("amount_input");
const itemsContainer = document.getElementById("items_container");

export const getItemById = (id) => id;

export const itemTemplate = ({ id, manufacturers, power, amount_of_lamps }) => `
<li class="delete_this_shi" id=${getItemById(id)}>
      <img src="../assets/no_image.jpg" class="item-container_image" alt="card">
      <div class="card-body">
        <div class="card_info">
          <h5 class="abc">${manufacturers}</h5>
          <p class="card-text">Power: ${power}w, lamps: ${amount_of_lamps}pcs.</p>
        </div>
        <div class="buttons-container">
          <button class="edit_button" id="edit_button_${id}">Edit</button>
          <button class="delete_button" id="delete_button_${id}">Delete</button>
        </div>
      </div>
    </li>`;

export const generateId = () => {
    let links = document.getElementsByClassName('card-body');
    let i= -3;
    for (let link in links){i++;}
    return i;
}

export const getInputValues = () => {
    return {
        manufacturers: manufacturerInput.value,
        power: powerInput.value,
        amount_of_lamps: amountInput.value,
    };
}

export const clearInputs = () => {
    manufacturerInput.value = "";
    powerInput.value = "";
    amountInput.value = "";
}

export const addItemToPage = ({ id, manufacturers, power, amount_of_lamps}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, manufacturers, power, amount_of_lamps})
    );
}