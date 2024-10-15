export const itemTemplate = ({ id, manufacturers, power, amountOfLamps }) => `
    <li class="delete_this_shi" id=${id}>
        <img src="../assets/no_image.jpg" class="item-container_image" alt="card">
        <div class="card-body">
            <div class="card_info">
                <h5 class="abc">${manufacturers}</h5>
                <p class="card-text">Power: ${power}w, lamps: ${amountOfLamps}pcs.</p>
            </div>
            <div class="buttons-container">
                <button class="edit_button" id="edit_button_${id}">Edit</button>
                <button class="delete_button" id="delete_button_${id}">Delete</button>
            </div>
        </div>
    </li>`;

export const editItemTemplate = (id, { manufacturers, power, amountOfLamps }) => `
    <li class="delete_this_shi" id=${id}>
        <div class="card-body">
            <img src="../assets/no_image.jpg" class="item-container_image" alt="card">
            <div class="card_info">
                <input type="text" class="abc" id="abc_${id}" value="${manufacturers}">
                <input type="number" min="0" class="power_${id}" value="${power}">
                <input type="number" min="0" class="lamps_${id}" value="${amountOfLamps}">
            </div>
            <div class="buttons-container">
                <button class="save_button" id="save_button_${id}">Save</button>
                <button class="delete_button" id="delete_button_${id}">Delete</button>
            </div>
        </div>
    </li>`;
