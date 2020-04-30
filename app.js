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

// Show Alert
UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div'); // Create div
    div.className = `alert ${className}`; // Add Classes
    div.appendChild(document.createTextNode(message)) //Add Text
    const container = document.querySelector('.container'); // Get Parent
    const form = document.querySelector('#sales-entry'); // Get child
    container.insertBefore(div, form); // Insert Alert

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}

// Delete Sale prototype
UI.prototype.deleteSale = function(target){
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('item').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('amount').value = '';
}

// Event Listeners for book entry
document.getElementById('sales-entry').addEventListener('submit', 
function (e) {
    // Get form values
    const item = document.getElementById('item').value;
    const qty = document.getElementById('qty').value;
    const amount = document.getElementById('amount').value;
   
const sale = new Sale (item, qty, amount);  // Instanciate Book 

const ui = new UI();  // Instanciate UI
if (item === '' || qty === '' || amount === '') { 
   ui.showAlert('Please enter all fields', 'error');
} else {
    ui.addSaleToList(sale);  // Add book to list
    ui.showAlert('Sale succesfully entered!', 'success'); // Show success
    ui.clearFields(); // Clear fields after submit
}

    e.preventDefault();
});    

// Event listener for delete
document.getElementById('sale-list').addEventListener('click', function(e){
    const ui = new UI() //Instantiate UI
    ui.deleteSale(e.target); //Detete target
    ui.showAlert('Sale removed', 'success') // Show delete alert
    e.preventDefault();
});