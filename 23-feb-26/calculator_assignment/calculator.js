
const display = document.getElementById("display");
const historyTable = document.querySelector("#historyTable tbody");
function appendValue(value) {
 display.value += value;
}
function clearDisplay() {
 display.value = "";
}

function deleteLast() {
display.value = display.value.slice(0, -1);
}

function isValidExpression(expression) {
 const regex = /^[0-9+\-*/.() ]+$/;
 return regex.test(expression);
}

function calculate() {
 const expression = display.value.trim();

 if (expression === "") {
 alert("Field is required!");
return;
 }

 if (!isValidExpression(expression)) {
 alert("Invalid characters detected!");
 return;
 }

 try {
 const result = eval(expression);

 if (!isFinite(result)) {
 alert("Cannot divide by zero!");
 return;
 }

 addToHistory(expression, result);
 display.value = result;

} catch (error) {
alert("Invalid Expression!");
 }
}
function addToHistory(expression, result) {
 const row = historyTable.insertRow();
 const cell1 = row.insertCell(0);
 const cell2 = row.insertCell(1);
 cell1.textContent = expression;
 cell2.textContent = result;
}
