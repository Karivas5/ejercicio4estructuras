console.log("Ejercicio 4 Estructuras de control: FOR")
//1. Crea un programa que imprima en consola los números impares del 1 al 50.
console.log("Este programa muestra los números impares que hay entre el número 1 y el número 50:")
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


//2. Crea un programa que pregunte al usuario un número. 
//Usando el archivo de arreglo de Pokémons, 
//mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 
//hasta el número introducido por el usuario. 
//https://pastebin.com/Zzk8g7Z6. (Esta es la lista de nombres.)
/*function esMultiploDeCinco(numero) {
  return numero % 5 === 0;
}
function mostrarPokemonsMultiplosDeCinco() {
  let numeroUsuario = prompt('Introduce un número:');
  numeroUsuario = parseInt(numeroUsuario);
  if (isNaN(numeroUsuario) || numeroUsuario < 1) {
    console.log('Por favor, introduce un número válido.');
    return;
  }
  for (let i = 1; i <= numeroUsuario; i++) {
    if (esMultiploDeCinco(i)) {
      const pokemonsMultiplos = pokemons.filter(pokemon => pokemon.number === i);
      pokemonsMultiplos.forEach(pokemon => console.log(pokemon.name));
    }
  }
}
mostrarPokemonsMultiplosDeCinco();
>>>NOTA: NO ENCUENTRO LA MANERA DE AGREGAR LA LIGA DE LA LISTA DE NOMBRES PARA QUE FUNCIONE EL PROGRAMA.
YA LO HICE DESDE EL HTML TAMBIÉN PERO NO FUNCIONA. LO DEJO AQUÍ PARA CORREGIR DESPUÉS<<<*/


//3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
//y muestre en consola solo los elementos que son tipo número.
console.log("Este programa muestra solo los elementos que hay de tipo número:[4,”dos”,8,”tres”,5,9,1,”cero”]")
const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
arreglo.forEach(elemento => {
  if (typeof elemento === 'number') {
    console.log(elemento);
  }
});
