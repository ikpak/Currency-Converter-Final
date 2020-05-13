// const currencyRatio = 23400;

const currencyRatio = {
    vnd: {
      usd: 0.000043,
      krw: 0.051,
      vnd: 1
    },
    usd: {
      usd: 1,
      krw: 1193.27,
      vnd: 23235.5
    },
    krw: {
      usd: 0.00084,
      krw: 1,
      vnd: 19.47
    }
  };

const from = document.getElementById("fromList")
const to = document.getElementById("toList")
const amount = document.getElementById("amountInput");
let result = document.getElementById("resultArea")
let convertedAmount = 0;
let format = '';

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
}

function convert() {
    convertedAmount = amount.value * currencyRatio[from.value][to.value]

    format = formatCurrency(to.value, convertedAmount)

    result.innerHTML = `The converted amount is equal to ${format}`
}