function calculateSum() {
    let sum = 0;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    sum = parseInt(num1) + parseInt(num2);
    alert("Summa on: " + sum);
}
