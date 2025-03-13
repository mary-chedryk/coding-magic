function findMax() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;

    if (a === ""||  b === ""||  c === "") {
        document.getElementById("result").textContent = "Будь ласка, заповніть всі поля.";
        return;
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").textContent = "Будь ласка, введіть числа.";
        return;
    }

    let maxNumber = Math.max(a, b, c);

    document.getElementById("result").textContent = maxNumber;
}