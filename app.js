'use strict'

const billInput = document.querySelector('.bill-input');
const tip = document.querySelectorAll('.tips');
const customTip = document.querySelector('.tip-custom');
const peopleInput = document.querySelector('.people-input');
const tipPerPerson = document.querySelector('.total-tips');
const total = document.querySelector('.total');
const resetBtn = document.querySelector('.reset');
const error = document.querySelector('.error');

billInput.value = '0.0';
peopleInput.value = '1'
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
total.innerHTML = '$' + (0.0).toFixed(2);

let bill = 0.0;
let person = 1;
let tipValue = 0.15;


billInput.addEventListener('input', billAmount);
tip.forEach(function (act) {
    act.addEventListener('click', activeTip);
});
customTip.addEventListener('input', customtipVal);
peopleInput.addEventListener('input', peopleAmount);
resetBtn.addEventListener('click', resetCalc);


function billAmount() {
    bill = parseFloat(billInput.value);
    calculateTip();
}


function activeTip(event) {
    tip.forEach(function (act) {
        act.classList.remove('active-tip');
        if (event.target.innerHTML == act.innerHTML) {
            act.classList.add('active-tip');
            tipValue = parseFloat(act.innerHTML) / 100
        }
    });
    calculateTip();
}

function customtipVal() {
    tipValue = parseFloat(customTip.value / 100);

    tip.forEach(function (act) {
        act.classList.remove('active-tip');
    })
    calculateTip();

}


function peopleAmount() {
    person = parseFloat(peopleInput.value);

    if (person <= 0 || peopleInput.value === '') {
        peopleInput.style.border = '2px solid #E17052';
        error.style.display = 'block';
    } else {
        peopleInput.style.border = '2px solid #26C2AE';
        error.style.display = 'none';
        calculateTip();

    }
    calculateTip();
}

function calculateTip() {
    if (person >= 1) {
        let tipAmount = (bill * tipValue) / person;
        let tipTotal = (bill * tipAmount) / person;
        tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
        total.innerHTML = '$' + tipTotal.toFixed(2);
    }
}


function resetCalc() {
    billInput.value = '0.0';
    billAmount();
    peopleInput.value = '1'
    peopleAmount();
    customTip.value = '';
}





