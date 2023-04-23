
const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
  // [2, 4, 6, 8, 10, 12]
   const duplicar=(numero)=>numero*2 // se puede crear la funcion en una variable para que no quede tan larga lo que va en el parentesis de las funciones
  const resultado1= arr.map(duplicar);
  console.log(resultado1);


// utilizar el método filter para filtrar los números pares de arr *********
  // [2, 4, 6]

/*const resultado=array.filter(function(value){
    return value % 2===0;
});*/ // forma con fuction 

const pares = arr.filter((value)=>value %2 ===0); // con funcion tipo flecha
console.log(pares);

// utilizar el método reduce para sumar todos los elementos
  // 21

  const sumatoria= arr.reduce((acc,items)=>acc+=items);
  console.log(sumatoria);