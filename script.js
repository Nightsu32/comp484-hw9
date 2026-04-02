

const today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

const formattedDate = "Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = formattedDate;


let value1 = "42";
let value2 = "19.75";
let value3 = "hello";
let value4 = "100";

let num1 = Number(value1);
let num2 = Number(value2);
let num3 = Number(value3);
let num4 = Number(value4);

function analyzeValue(original, converted) {
  let output = "Original: '" + original + "' → Converted: " + converted;

  if (Number.isNaN(converted)) {
    output += " → This value is NOT a valid number.";
  } else {
    output += " → This value is a valid number.";
  }

  if (Number.isInteger(converted)) {
    output += " → It is an integer.";
  } else {
    output += " → It is NOT an integer.";
  }

  return output;
}

let conversionResults =
  analyzeValue(value1, num1) + "<br><br>" +
  analyzeValue(value2, num2) + "<br><br>" +
  analyzeValue(value3, num3) + "<br><br>" +
  analyzeValue(value4, num4);

document.getElementById("numberConversionOutput").innerHTML = conversionResults;



let itemPrice = 49.99;
let taxRate = 0.0825;
let shippingCost = 5.0;

let subtotal = itemPrice;
let taxAmount = subtotal * taxRate;
let totalCost = subtotal + taxAmount + shippingCost;

let formattedTax = taxAmount.toFixed(2);
let formattedTotal = totalCost.toFixed(2);

let mathResults =
  "Item Price: $" + itemPrice + "<br>" +
  "Tax: $" + formattedTax + "<br>" +
  "Shipping: $" + shippingCost + "<br><br>" +
  "<strong>Total Cost: $" + formattedTotal + "</strong>";

document.getElementById("mathOutput").innerHTML = mathResults;