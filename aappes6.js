// Salel class
class Sale {
    constructor (item, qty, amount) {
        this.item = item;
        this.qty = qty;
        this.amount = amount;
    }
};

// UI class
class UI {
    addSaleToList (sale) {
        const list = document.getElementById('sale-list');
    const row = document.createElement('tr'); // Create tr element
    row.innerHTML = `
        <td>${sale.item}</td>
        <td>${sale.qty}</td>
        <td>${sale.amount}</td>
        <td><a href="#" class="delete">X</td>
    `;                                          //  Insert cols
    list.appendChild(row);
    };
// Show alert 
showAlert (message, className) {
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
// Delelte sale
deleteSale (target) {
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
// Clear fields
clearFields () {
    document.getElementById('item').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('amount').value = '';
    }
};

// Local Storage
class Store {
    // Get sales
    static getSales () {
        let sales;
        if (localStorage.getItem('sales') === null) {
            sales = [];
        } else {
            sales = JSON.parse(localStorage.getItem('sales'));
        }
        return sales;
    }
    // display sales
    static displaySales () {
        const sales = Store.getSales();
        sales.forEach(function(sale){
            const ui = new UI;
            ui.addSaleToList(sale);
        })
    }
    // add sale
    static  addSale (sale) {
        const sales = Store.getSales();
        sales.push(sale);
        localStorage.setItem('sales', JSON.stringify(sales));
    }
    // Remove sale
    static removeSale (amount) {
        const sales = Store.getSales();
        sales.forEach(function(sale, index){
            if(sale.amount === amount) {
                sales.splice(index, 1)
            }
        });
        localStorage.setItem('sales', JSON.stringify(sales));
    }
}

//  DOM load event
document.addEventListener('DOMContentLoaded', Store.displaySales);

// Event Listeners for sale entry
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
    Store.addSale(sale) // Add to store
    ui.showAlert('Sale succesfully entered!', 'success'); // Show success
    ui.clearFields(); // Clear fields after submit
}

    e.preventDefault();
});    

// Event listener for delete
document.getElementById('sale-list').addEventListener('click', function(e){
    const ui = new UI() //Instantiate UI
    ui.deleteSale(e.target); //Detete target
    Store.removeSale(e.target.parentElement.previousElementSibling.textContent); // Remove from Local storage
    ui.showAlert('Sale removed', 'success') // Show delete alert
    e.preventDefault();
});