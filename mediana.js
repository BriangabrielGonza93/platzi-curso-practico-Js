function calcularMediaAritmetica(lista) {
 const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
          return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100,
    200,
    800,
    40000000,
];

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numerito){
 if(numerito % 2 === 0){
     return true;
 } else {
     return false;
 }
}
let mediana;

if(esPar(lista1.length)) {
    const elemeno1 = lista1[mitadlista1 - 1];
    const elemeno2 = lista1[mitadlista1];

    const promedioElemento1y2 = calcularMediaAritmetica ([
        elemeno1,
        elemeno2,
    ]);

//  necesitamos dos elementos 
//  -> el promedio 
//  -> Mediana 
   mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadlista1];
  //posicion mitadLista1 dentro lista1
  // -> Mediana
}