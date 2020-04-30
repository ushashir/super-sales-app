// Sale Contructor
function Sale (item, qty, amount){
    this.item = item;
    this.qty = qty;
    this.amount = amount;
}

// UI Constructor
function UI (){};
UI.prototype.addSaleToList = function (sale){
const list = document.getElementById('sale-list');
const row = document.createElement('tr'); // Create tr element
    row.innerHTML = `
        <td>${sale.item}</td>
        <td>${sale.qty}</td>
        <td>${sale.amount}</td>
        <td><a href="#" class="delete">X</td>
    `;                                          //  Insert cols
list.appendChild(row);
}

// // Show Alert
// UI.prototype.showAlert = function (message, className) {
//     const div = document.createElement('div'); // Create div
//     div.className = `alert ${className}`; // Add Classes
//     div.appendChild(document.createTextNode(message)) //Add Text
//     const container = document.querySelector('.container'); // Get Parent
//     const form = document.querySelector('#sales-item');
//     container.insertBefore(div, form); // Insert Alert

//     setTimeout(function(){
//         document.querySelector('.alert').remove();
//     }, 3000);
// }

// // Clear fields
// UI.prototype.clearField = function(){
//     document.getElementById('item').value = '';
//     document.getElementById('qty').value = '';
//     document.getElementById('amount').value = '';
// }

// Event Listeners
document.getElementById('sales-entry').addEventListener('submit', 
function (e) {
    // Get form values
    const item = document.getElementById('item').value;
    const qty = document.getElementById('qty').value;
    const amount = document.getElementById('amount').value;
   
const sale = new Sale (item, qty, amount);  // Instanciate Book 

const ui = new UI();  // Instanciate UI
// if (item === '' || qty === '' || amount === '') { 
//    ui.showAlert('Please fill in all fields');
// } else {
    ui.addSaleToList(sale);  // Add book to list
//     ui.showAlert('Bood Added!', 'success'); // Show success
//     ui.clearField(); // Clear fields
// }

    e.preventDefault();
});       