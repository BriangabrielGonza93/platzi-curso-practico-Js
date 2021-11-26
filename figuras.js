//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+"Cm");

function perimetroCuadrado(lado) {
 return lado* 4;
} 

//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" Cm");

function areaCuadrado(lado) {
    return lado * lado;
   } 
//console.log("El área del cuadrado es: "+areaCuadrado+" Cm2");
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del Triángulo miden: "
//     +ladoTriangulo1
//     +" Cm, "
//     +ladoTriangulo2
//     +" Cm, "
//     +baseTriangulo
//     +" Cm, "
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de : "+alturaTriangulo+" Cm");

function perimetroTriangulo(lado1,lado2,base) {
return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: "+perimetroTriangulo+" Cm");

function areaTriangulo(base,altura) {
 return (base * altura)/ 2;
}

//console.log("El área del Triángulo es: "+areaTriangulo+" Cm2");

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: "+radioCirculo+" Cm");

//Diámetro
function diametroCirculo(radio) {
 return radio * 2;
} 


//PI
const PI = Math.PI;
console.log("PI es: "+PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
 return diametro * PI;
}


//Área
function areaCirculo(radio) {
 return (radio * radio) * PI;
}

console.groupEnd();


//Aca interactuamos con el Html
function calcularPerimetroCuadrado(){
 const input = document.getElementById("inputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
   
    const area = areaCuadrado(value);
    alert(area);
}
