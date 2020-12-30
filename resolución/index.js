// DEFINO  la data
const autosData = [
  { Marca: "Peugeot", Modelo: "206", Puertas: "4", Precio: 200000 },
  {
    Marca: "Honda",
    Modelo: "Titan",
    Cilindrada: "125cc",
    Precio: 60000,
  },
  { Marca: "Peugeot", Modelo: "208", Puertas: "5", Precio: 250000 },
  { Marca: "Yamaha", Modelo: "YBR", Cilindrada: "160cc", Precio: 80500.5 },
];

const autos = autosData;

// Primero
console.log("Ejercicio 1:");
const mostrarDataAutos = (autos) => {
  autos.forEach((auto) => {
    let texto;
    if (auto.Cilindrada) {
      texto = `Cilindrada: ${auto.Cilindrada}`;
    } else {
      texto = `Puertas: ${auto.Puertas}`;
    }
    console.log(
      `Marca: ${auto.Marca} // Modelo: ${
        auto.Modelo
      } // ${texto} // Precio: $${auto.Precio.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    );
  });
};

mostrarDataAutos(autos);

// SEGUNDO
console.log("===================================================");
console.log("Ejercicio 2:");

const getMasCaro = (autos) =>
  autos.reduce((acumulador, siguiente) =>
    acumulador.Precio > siguiente.Precio ? acumulador : siguiente
  );

const getMasBarato = (autos) =>
  autos.reduce((acumulador, siguiente) =>
    acumulador.Precio < siguiente.Precio ? acumulador : siguiente
  );

const buscarLetra = (autos, letra) => {
  let autoBuscado;
  autos.forEach((auto) => {
    let modelo = auto.Modelo;
    if (modelo.includes(letra)) {
      autoBuscado = auto;
    }
  });
  return autoBuscado;
};

const caro = getMasCaro(autos);
const barato = getMasBarato(autos);
const modeloConLetra = buscarLetra(autos, "Y");

console.log(`Vehículo más caro: ${caro.Marca} ${caro.Modelo}`);
console.log(`Vehículo más barato: ${barato.Marca} ${barato.Modelo}`);
console.log(
  `Vehículo que contiene en el modelo la letra ‘Y’ : ${modeloConLetra.Marca} ${
    modeloConLetra.Modelo
  } ${modeloConLetra.Precio.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
);

// Tercero
console.log("===================================================");
console.log("Ejercicio 3:");
console.log("Vehículos ordenados por precio de mayor a menor:");

const autosOrdenados = autos.sort((a, b) => b.Precio - a.Precio);

autosOrdenados.forEach((auto) => {
  console.log(`${auto.Marca} ${auto.Modelo}`);
});

/* Simplemente me digné a hacerlo con 
el objeto prototipado de Js se podia hacer con clases
pero no era óptimo para mi */
