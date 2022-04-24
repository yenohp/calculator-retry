const buttons = Array.from(document.querySelectorAll('button'));
const displayText = document.querySelector('h1');


let arr = [];
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let current = e.target;
        // Only change the innerText if it is a number
        if (current.className == 'numbers') {
            update(current);
            // Dont add zeros if the first number is zero
            // If the decimal is clicked
            // If the +/- is clicked
            // If the % is clicked
        }
        // Clear display and array
        if (current.id == 'clear') {
            empty(arr);
        }
        // Activate an operator

        // If an operator is clicked

    })
}

// Function for clicking a button
const activate = function (button) {

}
const update = function (button) {
    arr.push(button.innerText);
    displayText.innerText = arr.join('');
    console.log(arr);
}
const empty = function (arr) {
    if (arr.length == 0) return;
    let length = arr.length;
    for (let i = 0; i < length; i++) arr.pop();
    displayText.innerText = '0';
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