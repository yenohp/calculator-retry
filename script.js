const buttons = Array.from(document.querySelectorAll('button'));
const operators = Array.from(document.querySelectorAll('.operators'));
const displayText = document.querySelector('h1');
const decimalBttn = document.querySelector('#decimal');

let arr = [];
let memory = [];
let value = 0;
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let current = e.target;
        // Only change the innerText if it is a number
        if (current.className == 'numbers') {
            // Dont add zeros if the first number is zero
            if (arr[0] == 0) arr.pop();
            update(current);

            // If the % is clicked
        }
        // If the decimal is clicked
        else if (current.id == 'decimal') {
            current.setAttribute('disabled', 'true');
        }
        // If the +/- is clicked
        else if (current.id == 'sign') {
            changeSign();
        }
        // Clear display and array
        else if (current.id == 'clear') {
            empty(arr);
        }
        // Activate an operator
        else if (current.className == 'operators') {
            memory.push(value);
            value = 0;
            current.classList.add('activate');
        }
        // If an operator is clicked

    })
}

// Function for clicking a button
const activate = function (button) {

}
// Change the sign +/-
const changeSign = function () {
    if (value < 0) {
        arr.splice(0, 1);
        value *= -1;
        displayText.innerText = arr.join('');
        return;
    }
    arr.splice(0, 0, '-');
    value *= -1;
    displayText.innerText = arr.join('');

}
const update = function (button) {
    arr.push(button.innerText);
    displayText.innerText = arr.join('');
    value = arr.join('');
    console.log(arr);
}
const empty = function (arr) {
    console.log('EMPTYING');
    // empty curr arr
    if (arr.length == 0) return;
    else {
        let length = arr.length;
        for (let i = 0; i < length; i++) arr.pop();
    }
    // empty memory arr
    let length2 = memory.length;
    for (let i = 0; i < length2; i++) memory.pop();
    displayText.innerText = '0';
    value = 0;
    decimalBttn.removeAttribute('disabled');
}

// Create a new function 'operate' that takes an operator and 2 numbers and then calls one of the operator functions on the numbers
const operate = function (operator, x, y) {
    if (operator == '+') {
        return x + y;
    } else if (operator == '-') {
        return x - y;
    } else if (operator == '*') {
        return x * y;
    } else if (operator == '/') {
        if (y == 0) {
            return 'ERR CANNOT DIVIDE BY 0';
        }
        return x / y;
    }
}