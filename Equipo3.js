// Fran
let fran = [1, 2, 3, 4, 5];
console.log(fran[0]);
fran[0] = 2;

// Alan
let alan = [1, 2, 3];
alan.push(4);
console.log(alan);

let array2 = [1, 2, 3];
array2.pop();
console.log(array2);

let miArreglo = ["P", "G", "Paj", "V", "E"];
miArreglo.unshift("C");
console.log(miArreglo);

// Matin
let cities = ["M", "V", "M"];
let first = cities.shift();
console.log(cities);
console.log(first);

let martin = ["C", "V", "B"];

console.log(martin.includes("C"));
console.log(martin.includes("P"));

console.log(martin.indexOf("CABALLO"));
console.log(martin.indexOf("VACA"));

for (let i = 0; i < martin.length; i++) {
    console.log(martin[i]);
}

// Patron
let palabra = ["HIPOPOTOMONSTOSESQUIPEDOLIOFOBIA", "devoz", "haitiano", "Anticonstitucionalmente", "Electroencelografista"];
let masde5letras = palabra.filter((x) => x.length >= 5);
console.log(masde5letras);

let number = [1, 4, 9, 16];
let raiz = number.map((number) => Math.sqrt(number));
console.log(raiz);

let inicioen = 1;
let operacion = raiz.reduce((acumulada, acumulado) => acumulada * acumulado, inicioen);
console.log(operacion);

// Pedrasa
let nump = [8, 30, 50, 5151, -89];
let positivo = nump.every(nump => nump > 0);
console.log(positivo);

let numM = [1, -89, 565, 988];

let Negativo = numM.some(num => num < 0);
console.log(Negativo);

let namen = ["hdc", "dhvyhv", "sjbc"];
namen.sort();
console.log(namen);

// Citlalli
let numeros = [-89, 544, 50, 30, 5];
numeros.reverse();
console.log(numeros);

let arreglo1 = [1, 20, 5];
let arreglo2 = [8, 9, 5];

let combinado = arreglo1.concat(arreglo2);
console.log(combinado);

// Alejandro
let nombreSalon = ["For", "one"];
nombreSalon[0] = "Anti-Aspiral";

let negativo = numM.some((num) => num < 0);

function nombreEQUIS(num) {
    if (num < 0) {
        console.log("True");
    }
}


nombreEQUIS(-5); 