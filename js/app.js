// Item Contructor
function Item (sn, item, qty, price){
    this.sn = sn;
    this.item = item;
    this.qty = qty;
    this.price = price;
}
// UI Constructor
function UI (){};
UI.prototype.addBookToList = function (book){
const list = document.getElementById('book-list');
const row = document.createElement('tr'); // Create tr element
    row.innerHTML = `
        <td>${book.sn}</td>
        <td>${book.item}</td>
        <td>${book.qty}</td>
        <td>${book.price}</td>
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
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form); // Insert Alert

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}
// Clear fields
UI.prototype.clearField = function(){
    document.getElementById('sn').value = '';
    document.getElementById('item').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function (e) {
    // Get form values
    const sn = document.getElementById('sn').value;
    const item = document.getElementById('item').value;
    const qty = document.getElementById('qty').value;
    const price = document.getElementById('price').value;

const book = new Book (sn, item, qty, price);  // Instanciate Book 
const ui = new UI();  // Instanciate UI
if (sn === '' || item === '' || qty === '' || price === '') { 
   ui.showAlert('Please fill in all fields');
} else {
    ui.addBookToList(book);  // Add book to list
    ui.showAlert('Bood Added!', 'success'); // Show success
    ui.clearField(); // Clear fields
}

    e.preventDefault();
});       