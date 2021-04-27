"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let arrCustomers = [];

function Customer(name, mobile) {
    this.name = name;
    this.type = mobile;
    this.price = random(100, 500);
    this.condition = '';
    arrCustomers.push(this);
    sittingItem();
}

Customer.prototype.getCondition = function () {
    if (this.price < 200) {
        this.condition = 'Used';
    } else {
        this.condition = 'New';
    }

}
// arrCustomers.getCondition();


let data = document.getElementById('data');
let table = document.createElement('table');
data.appendChild(table);

function sittingItem() {
    let user = JSON.stringify(arrCustomers);
    localStorage.setItem('customer', user);
}
function gettingItem() {
    let customers = localStorage.getItem('customer');
    let parseOb = JSON.parse(customers);

    if (parseOb) {
        for (let i = 0; i < parseOb.length; i++) {
            new Customer(parseOb[i].name, parseOb[i].type);
        }
    }
}
let form = document.getElementById('form');
form.addEventListener('submit', submiter)

function submiter(event) {
    event.preventDefault()
    console.log(event);
    let userName = event.target.name.value;
    let mobileType = event.target.type.value;
    console.log(userName);
    console.log(mobileType);
    let newCustomer = new Customer(userName,mobileType);
    console.log(newCustomer);
    newCustomer.render();
}
function header() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let nameCell = document.createElement('th');
    headerRow.appendChild(nameCell);
    nameCell.textContent = 'User';

    let typeCell = document.createElement('th');
    headerRow.appendChild(typeCell);
    typeCell.textContent = 'Type';

    let priceCell = document.createElement('th');
    headerRow.appendChild(priceCell);
    priceCell.textContent = 'Price';

    let conditionCell = document.createElement('th');
    headerRow.appendChild(conditionCell);
    conditionCell.textContent = 'Condition';

}
Customer.prototype.render = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let customersName = document.createElement('td');
    dataRow.appendChild(customersName);
    customersName.textContent = `${this.name}`;

    let mobileTypeCusto = document.createElement('td');
    dataRow.appendChild(mobileTypeCusto);
    mobileTypeCusto.textContent = `${this.type}`;

    let price = document.createElement('td');
    dataRow.appendChild(price);
    price.textContent = `${this.price}`;

    let condition = document.createElement('td');
    dataRow.appendChild(condition);
    condition.textContent = `${this.condition}`;
}



gettingItem();

header();
for (let i = 0; i < arrCustomers.length; i++) {
    arrCustomers[i].render();
}
