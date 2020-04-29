// Item Contructor
function Sales (item, qty, amount){
    this.item = item;
    this.qty = qty;
    this.amount = amount;
}
// UI Constructor
function UI (){};
UI.prototype.addSalesToList = function (sales){
const list = document.getElementById('item-list');
const row = document.createElement('tr'); // Create tr element
    row.innerHTML = `
        <td>${sales.item}</td>
        <td>${sales.qty}</td>
        <td>${sales.amount}</td>
        <td><a href="#" class="delete">X</td>
    `;                                          //  Insert cols
list.appendChild(row);
}
// Show Alert
// UI.prototype.showAlert = function (message, className) {
//     const div = document.createElement('div'); // Create div
//     div.className = `alert ${className}`; // Add Classes
//     div.appendChild(document.createTextNode(message)) //Add Text
//     const container = document.querySelector('.container'); // Get Parent
//     const form = document.querySelector('#item-form');
//     container.insertBefore(div, form); // Insert Alert

//     setTimeout(function(){
//         document.querySelector('.alert').remove();
//     }, 3000);
// }
// // Clear fields
// UI.prototype.clearField = function(){
//     document.getElementById('sn').value = '';
//     document.getElementById('item').value = '';
//     document.getElementById('qty').value = '';
//     document.getElementById('amount').value = '';
// }
// // Event Listeners
// document.getElementById('item-form').addEventListener('submit', 
// function (e) {
//     // Get form values
//     const sn = document.getElementById('sn').value;
//     const item = document.getElementById('item').value;
//     const qty = document.getElementById('qty').value;
//     const amount = document.getElementById('amount').value;

// const item = new item (sn, item, qty, amount);  // Instanciate item 
// const ui = new UI();  // Instanciate UI
// if (sn === '' || item === '' || qty === '' || amount === '') { 
//    ui.showAlert('Please fill in all fields');
// } else {
//     ui.additemToList(item);  // Add item to list
//     ui.showAlert('Bood Added!', 'success'); // Show success
//     ui.clearField(); // Clear fields
// }

//     e.preventDefault();
// });       