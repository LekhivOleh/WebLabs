import {
    getInputValues,
    clearInputs,
    generateId,
    addItemToPage,
    getItemById,
    itemTemplate,
} from "../util.js";

class lamp_card {
    constructor(manufacturer, power, amount_of_lamps) {
        this.id = generateId();
        this.manufacturers = manufacturer;
        this.power = parseInt(power);
        this.amount_of_lamps = parseInt(amount_of_lamps);
    }
}

let submitButton = document.getElementById("submit_button");
let findButton = document.getElementById("find_button");
let cancelButton = document.getElementById("cancel_button");
let findInput = document.getElementById("find_input");
let countButton = document.getElementById("count_button");
let selectSort = document.getElementById("select_sort");

let data_arr = [
    { id: 0, manufacturers: "Samsung", power: 350, amount_of_lamps: 10 },
    { id: 1, manufacturers: "Xianchong", power: 20, amount_of_lamps: 25 },
    { id: 2, manufacturers: "Phillips", power: 3000, amount_of_lamps: 3 },
    { id: 3, manufacturers: "Panasonic", power: 10, amount_of_lamps: 1 },
    { id: 4, manufacturers: "Xiaomi", power: 284, amount_of_lamps: 15 },
];

let displayedData = [...data_arr];
let filteredData = [...data_arr];

function displayData(data) {
    displayedData = data;
    const tableBody = document.getElementById('items_container');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = itemTemplate(item);
        tableBody.insertAdjacentHTML('beforeend', row);
        document.getElementById(`delete_button_${item.id}`).addEventListener('click', () => deleteItem(item.id));
        document.getElementById(`edit_button_${item.id}`).addEventListener('click', () => editItem(item.id));
    });
}

function cancelButtonClick() {
    findInput.value = "";
    selectSort.value = "";
    filteredData = [...data_arr];
    displayData(data_arr);
    sortItems();
}

function submitButtonClick(event) {
    event.preventDefault();
    const { manufacturers, power, amount_of_lamps } = getInputValues();
    addItem(new lamp_card(manufacturers, power, amount_of_lamps));
}

function countItems() {
    const itemCount = displayedData.length;
    const totalPower = displayedData.reduce((sum, item) => sum + item.power, 0);
    const totalLamps = displayedData.reduce((sum, item) => sum + item.amount_of_lamps, 0);

    const amountLabel = document.querySelector("#amount_label");
    const powerLabel = document.querySelector("#power_label");
    const lampAmountLabel = document.querySelector("#lamp_amount_label");

    amountLabel.innerHTML = `Count: ${itemCount}`;
    powerLabel.innerHTML = `Total power: ${totalPower}W`;
    lampAmountLabel.innerHTML = `Total lamps amount: ${totalLamps}pcs`;

    console.log(itemCount, totalPower, totalLamps);
    return itemCount;
}

function findItem() {
    let findValue = findInput.value.toLowerCase().trim();
    filteredData = data_arr.filter(item =>
        item.manufacturers.toLowerCase().includes(findValue) ||
        item.power.toString().includes(findValue) ||
        item.amount_of_lamps.toString().includes(findValue)
    );
    displayData(filteredData);
}

const addItem = (newItem) => {
    if (newItem.amount_of_lamps && newItem.manufacturers && newItem.power && newItem.power >= 0
        && newItem.amount_of_lamps >= 0 && !data_arr.find((lamp) => lamp.manufacturers === newItem.manufacturers)){
        data_arr.push(newItem);
        filteredData.push(newItem);
        displayData(filteredData);
        sortItems();
        clearInputs();
    } else {
        alert('Something is wrong with the given data');
    }
};

function sortItems() {
    const handleSort = (event) => {
        const sortBy = event.target.value;
        let sortedItems;

        if (sortBy === 'manufacturers increasing') {
            sortedItems = [...filteredData].sort((a, b) => a.manufacturers.localeCompare(b.manufacturers));
        } else if (sortBy === 'manufacturers decreasing') {
            sortedItems = [...filteredData].sort((a, b) => b.manufacturers.localeCompare(a.manufacturers));
        } else if (sortBy === 'power increasing') {
            sortedItems = [...filteredData].sort((a, b) => a.power - b.power);
        } else if (sortBy === 'power decreasing') {
            sortedItems = [...filteredData].sort((a, b) => b.power - a.power);
        } else if (sortBy === 'amount of lamps increasing') {
            sortedItems = [...filteredData].sort((a, b) => a.amount_of_lamps - b.amount_of_lamps);
        } else if (sortBy === 'amount of lamps decreasing') {
            sortedItems = [...filteredData].sort((a, b) => b.amount_of_lamps - a.amount_of_lamps);
        }
        displayData(sortedItems);
    };

    selectSort.removeEventListener('change', handleSort);
    selectSort.addEventListener('change', handleSort);
}

function deleteItem(itemId) {
    data_arr = data_arr.filter(item => item.id !== itemId);
    filteredData = filteredData.filter(item => item.id !== itemId);
    displayData(filteredData);
}

function editItem(itemId) {
    const item = data_arr.find(item => item.id === itemId);

    const itemContainer = document.getElementById(itemId);
    itemContainer.innerHTML = `
        <div class="card-body">
            <img src="../assets/no_image.jpg" class="item-container_image" alt="card">
            <div class="card_info">
                <input class="abc" value="${item.manufacturers}">
                <input class="power" value="${item.power}">
                <input class="lamps" value="${item.amount_of_lamps}">
            </div>
            <div class="buttons-container">
                <button class="save_button" id="save_button_${itemId}">Save</button>
                <button class="delete_button" id="delete_button_${itemId}">Delete</button>
            </div>
        </div>
    `;

    const saveButton = document.getElementById(`save_button_${itemId}`);
    saveButton.addEventListener('click', () => {
        const newManufacturers = itemContainer.querySelector('.abc').value;
        const newPower = itemContainer.querySelector('.power').value;
        const newAmountOfLamps = itemContainer.querySelector('.lamps').value;

        if (newAmountOfLamps >= 0 && newPower >= 0 && newPower && newAmountOfLamps && newManufacturers) {
            const newItem = new lamp_card(newManufacturers, newPower, newAmountOfLamps);
            data_arr = data_arr.map(item => item.id === itemId ? newItem : item);
            filteredData = filteredData.map(item => item.id === itemId ? newItem : item);
            displayData(filteredData);
        }
        else{
            alert('Something is wrong with the given data');
        }
    });
}

submitButton.addEventListener("click", submitButtonClick);
countButton.addEventListener("click", countItems);
findButton.addEventListener("click", findItem);
cancelButton.addEventListener("click", cancelButtonClick);
findInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        findItem();
    }
});

displayData(data_arr);
sortItems();