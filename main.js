const currencyRatio = 23400;

const from = document.getElementById("fromList")
const to = document.getElementById("toList")
const amount = document.getElementById("amountInput");
let result = document.getElementById("resultArea")
let convertedAmount = 0;
let format = '';

function vndToUsd() {
    return amount.value / currencyRatio
}

function usdToVnd() {
    return amount.value * currencyRatio
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
}

function convert() {
    if(from.value === 'VND' && to.value === 'USD') {
        convertedAmount = vndToUsd()
        format = formatCurrency(to.value, convertedAmount)
    
    } else if(from.value === 'USD' && to.value === 'VND') {
        convertedAmount = usdToVnd()
        format = formatCurrency(to.value, convertedAmount)
    
    } else {
        alert("Please enter an existing currency")
        return; // when function meets return will terminate the function immediately
    
    }
    result.innerHTML = `The converted amount is equal to ${format}`
}

