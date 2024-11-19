function clearDisplay() {
    document.getElementById("display").value = "";
    }
    
    function appendNumber(number) {
    document.getElementById("display").value += number;
    }
    
    function appendOperator(operator) {
    document.getElementById("display").value += " " + operator + " ";
    }
    
    function calculate() {
    let display = document.getElementById("display").value;
    try {
    document.getElementById("display").value = eval(display);
    } catch (error) {
    document.getElementById("display").value = "Error";
    }
    }