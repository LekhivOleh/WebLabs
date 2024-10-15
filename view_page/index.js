import {
    itemTemplate,
    editItemTemplate
} from "../util.js";

let submitButton = document.getElementById("submit_button");
let findButton = document.getElementById("find_button");
let cancelButton = document.getElementById("cancel_button");
let findInput = document.getElementById("find_input");
let countButton = document.getElementById("count_button");
let selectSort = document.getElementById("select_sort");
let manufacturerInput = document.getElementById("manufacturer_input");
let powerInput = document.getElementById("power_input");
let amountInput = document.getElementById("amount_input");

window.addEventListener("load", showAllItems);
submitButton.addEventListener("click", addItem);
findButton.addEventListener("click", showAllItems);
cancelButton.addEventListener("click", clearFind);
selectSort.addEventListener("change", showAllItems);
countButton.addEventListener("click", countItems);

function callGetAllItemsEndpoint(search, sort) {
    let endpointUrl = 'http://localhost:5005/Lamp/Get';
    if(!search && !sort){
        endpointUrl += '';
    }
    else if(!sort){
        endpointUrl += `?search=${search}`;
    }
    else if(!search){
        endpointUrl += `?sort=${sort}`;
    }
    else{
        endpointUrl += `?search=${search}&sort=${sort}`;
    }
    return fetch(endpointUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to get data from the server');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
}

function callAddItemEndpoint({ manufacturers, power, amountOfLamps }) {
    return fetch('http://localhost:5005/Lamp/Add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ manufacturers, power, amountOfLamps }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item');
            }
            return response;
        })
        .catch(error => {
            console.error(error);
        });
}

function callUpdateItemEndpoint(id, { manufacturers, power, amountOfLamps }) {
    return fetch(`http://localhost:5005/Lamp/Update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Manufacturers: manufacturers,
            Power: power,
            AmountOfLamps: amountOfLamps
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update item');
            }
            return response;
        })
        .catch(error => {
            console.error(error);
        });
}

function callDeleteItemEndpoint(id) {
    return fetch(`http://localhost:5005/Lamp/Delete/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            console.log(response);
            return response;
        })
        .catch(error => {
            console.error(error);
        });
}

function callCountItemsEndpoint(search) {
    let endpointUrl = 'http://localhost:5005/Lamp/Count';
    if (search) {
        endpointUrl += `?search=${search}`;
    }
    return fetch(endpointUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to count items');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
}

function showAllItems() {
    let sort = selectSort.value;
    let search = findInput.value;
    clearAllItems();
    callGetAllItemsEndpoint(search, sort)
        .then(lamps => {
            lamps.forEach(lamp => displayItem(lamp));
        })
        .catch(error => {
            console.error(error);
        });

}

async function addItem() {
    const {manufacturers, power, amountOfLamps} = getInputValues();
    if (manufacturers && power && amountOfLamps && power >= 0 && amountOfLamps >= 0) {
        await callGetAllItemsEndpoint()
            .then(lamps => {
                if (!lamps.some(lamp => lamp.manufacturers === manufacturers)) {
                    callAddItemEndpoint({manufacturers, power, amountOfLamps})
                        .then(() => {
                            clearAllItems();
                            showAllItems();
                            clearInputs();
                        })
                        .catch(error => {
                            console.error(error);
                        });
                } else {
                    alert('The manufacturer already exist');
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        alert('Please fill in the valid data');
    }
}

function displayItem(item) {
    const itemContainer = document.getElementById("items_container");
    itemContainer.insertAdjacentHTML("afterbegin", itemTemplate(item));

    const editButton = document.getElementById(`edit_button_${item.id}`);
    editButton.addEventListener('click', () => editItemInline(item.id, item.manufacturers, item.power, item.amountOfLamps));

    const deleteButton = document.getElementById(`delete_button_${item.id}`);
    deleteButton.addEventListener('click', () => deleteItem(item.id));
}

function editItemInline(id, manufacturers, power, amountOfLamps) {
    const item = document.getElementById(id);
    item.innerHTML = editItemTemplate(id, { manufacturers, power, amountOfLamps });

    const saveButton = document.getElementById(`save_button_${id}`);
    saveButton.addEventListener('click', () => saveItemInline(id));
}

function saveItemInline(id) {
    const item = document.getElementById(id);
    const newManufacturers = item.querySelector(`#abc_${id}`).value;
    const newPower = item.querySelector(`.power_${id}`).value;
    const newAmountOfLamps = item.querySelector(`.lamps_${id}`).value;

    if (newManufacturers && newPower && newAmountOfLamps && newPower >= 0 && newAmountOfLamps >= 0) {
        callGetAllItemsEndpoint()
            .then(lamps => {
                if (lamps.some(lamp => lamp.manufacturers === newManufacturers && lamp.id !== id)) {
                    alert('The manufacturer already exists');
                } else {
                    const data = {
                        manufacturers: newManufacturers,
                        power: newPower,
                        amountOfLamps: newAmountOfLamps
                    };

                    callUpdateItemEndpoint(id, data)
                        .then(() => {
                            item.innerHTML = itemTemplate({ id, manufacturers: newManufacturers, power: newPower, amountOfLamps: newAmountOfLamps });
                            const editButton = document.getElementById(`edit_button_${id}`);
                            editButton.addEventListener('click', () => editItemInline(id, newManufacturers, newPower, newAmountOfLamps));
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        alert('Please fill in the valid data');
    }
}

function deleteItem(id) {
    callDeleteItemEndpoint(id)
        .then(() => {
            clearAllItems();
            showAllItems();
        })
        .catch(error => {
            console.error(error);
        });
}


function countItems() {
    let search = findInput.value;
    callCountItemsEndpoint(search)
        .then(data => {
            let countLabel = document.getElementById("power_label");
            countLabel.innerHTML = `Total power: ${data}w`;
        })
        .catch(error => {
            console.error(error);
        });
}

function clearAllItems(){
    let items = document.querySelectorAll(".delete_this_shi");
    for(let item of items){
        item.remove();
    }
}

function clearInputs(){
    manufacturerInput.value = "";
    powerInput.value = "";
    amountInput.value = "";
}

function clearFind(){
    findInput.value = "";
    clearAllItems();
    showAllItems();
}

function getInputValues(){
    return {
        manufacturers: manufacturerInput.value,
        power: powerInput.value,
        amountOfLamps: amountInput.value,
    };
}