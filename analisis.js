// Helpers, funciones que no son parte de la logica del negocio, Utils

function esPar(numero){
    // if(numero % 2 === 0) {
    //  return true;
    // } else {
    //    return false; 
    // }
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
           function(valorAcumulado = 0, nuevoElemento){
             return valorAcumulado + nuevoElemento;
           }
       );
   
       const promedioLista = sumaLista / lista.length;
   
       return promedioLista;
   }

//Calcuadora de Mediana


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
       const personaMitad1 = lista[mitad -1];
       const personaMitad2 = lista[mitad];

       const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
       return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const SalariosArg = argentina.map(
 function(persona){
   return persona.salary; 
 }
);

const salariosArgSorted = SalariosArg.sort(
    function (salaryA,salaryB) {
     return salaryA - salaryB;
    }
);



const medianaGralArg = medianaSalarios(salariosArgSorted)

// Mediana del top 10%

// const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
// const Ejemplo = arrayEjemplo.splice(5,2);
// (P * (100 - d)) / 100 

const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log({
    medianaGralArg, 
    medianaTop10Arg,
});
 

   