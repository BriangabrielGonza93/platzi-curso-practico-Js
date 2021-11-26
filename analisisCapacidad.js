function esPar(num) {
    return (num % 2 === 0);
}

const salariosArg = argentina.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosArgSorted =  salariosArg.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persona1 = lista[mitad];
        const persona2 = lista[mitad-1];

        const mediana = (persona1 + persona2) / 2;

        return mediana;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del top 10%
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
    );

const medianaTop10Arg = medianaSalarios(salariosArgSorted);

// Capacidad de endeudamiento 
// Capacidad de Endeudamiento = (Ingresos Mensuales – Gastos Fijos) x 0.40

function capacidadEndeudamiento () {
    const ingresosMensuales = document.getElementById('ingresoMensual').value;
    const gastosFijos = document.getElementById('gastosFijos').value;
    const name =  document.getElementById('name').value;

    const posibleEndeudamiento = (ingresosMensuales - gastosFijos) * .40;

    console.log(posibleEndeudamiento);
    document.getElementById('resultEndeudamiento').innerText = name + " te puedes endeudar por :"  + posibleEndeudamiento + " 💰😃"; 

    agregandoDato(ingresosMensuales);
}

// Agregando Objeto a paises

function agregandoDato(salario, nombre){
    const pais =  document.getElementById('pais').value;

    if(pais === 'México')
    {
        mexico.push({
            name: nombre,
            salary: salario,
          });
    }
    else if (pais === 'Argentina') {
        argentina.push({
            name: nombre,
            salary: salario,
          });
    }
}

console.log(
    medianaGeneralArg,
    medianaTop10Arg,
);