let currentInput = "";

function press(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
    } catch {
        document.getElementById("display").value = "Error";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}
