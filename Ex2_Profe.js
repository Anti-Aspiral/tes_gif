function calcularFactorial(n) {
    if (n <= 1) { 
        return 1;
    } else {
        return n * calcularFactorial(n - 1)
    }
}


function calcularFibonacci(n) {
    if (n <= 1) { 
        return n;
    } else {
        return calcularFibonacci(n - 1) + calcularFibonacci(n - 2)
    }
}


function revertirTexto(str) {
    if (str === "") {
        return str
    } else {
        return revertirTexto(str.substr(1)) + str[0]
    }
}

//n!=n×(n−1)×(n−2)×…×1
function CalcularFactorial(factorial) {
    let resultado = calcularFactorial(factorial)
    console.log("Factorial de" + " " + factorial + " " + "es:" + resultado)
}
//F(n)=F(n−1)+F(n−2)

function CalcularFibonacci(fibonaccion) {
    let resultado = calcularFibonacci(fibonaccion)
    console.log("Fibonacci de" + " " + fibonaccion + " " + "es:" + resultado)
}
// Hola aloH
function RevertirTexto(reverso) {
    let resultado = revertirTexto(reverso)
    console.log("Reverso de" + " " + reverso + " " + "es:" + resultado)  
}


CalcularFactorial(10)
CalcularFibonacci(30)
RevertirTexto("HIPOPOTOMONSTROSESQUIPEDIALIOFOBIA")
