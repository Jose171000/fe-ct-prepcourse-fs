/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newArray = [];
   for (var i = 0; i<Object.keys(objeto).length; i++){
      newArray.push([Object.keys(objeto)[i], objeto[Object.keys(objeto)[i]]]);
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj = {};
   var nuevoString = string.split('').sort(); //lo que hará 'sort' es que va a ordenar los carácteres en orden al abecedario
   for(var letter of nuevoString){
      if(obj.hasOwnProperty(letter)){
         obj[letter]+=1;
      }else {
         obj[letter]=1;
      };
   };
   return obj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayu = '';
   var minu = '';
   for (var letter of string){
      if(letter === letter.toLowerCase()){
         minu +=letter;
      }else{
         mayu+=letter;
      }
   }
   string = mayu+minu;
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nuevaFrase = frase.split(' ');
   var arreglo = [];
   nuevaFrase.forEach((num)=> {
      arreglo.push(num.split('').reverse().join(''));//aquí primero usamos el split para separar, el reverse para rotar las letras y el join para unir las letras.
   });
   return arreglo.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var nuevoNum = numero.toString().split('').reverse().join('');
   if (nuevoNum==numero){
      return "Es capicua";
   }else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = string.split('');
   var unoMas = [];
   nuevoString.forEach((num)=> {
      if(num!=="a"&&num!=="b"&&num!=="c"){
        unoMas.push(num);
      }
   });
   return unoMas.join("");
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arr = arrayOfStrings;
   for(var i=0; i<arr.length; i++){
      var comparar = arr[i];
      j=i-1;
      while(j>=0 && comparar.length < arr[j].length){
         arr[j+1] = arr[j];
         j--;
      }
      arr[j+1]= comparar;
   }
   return arr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var primerArray = [];
   var secondArray = [];
   var nuevoArray = [];
   if(array1.length>array2.length){
      primerArray = array1;
      secondArray = array2;
   }else if(array1.length<array2.length){
      primerArray = array2;
      secondArray = array1;
   }else if(array1.length===array2.length){
      primerArray = array1;
      secondArray = array2;
   }
   for (let i=0;i<primerArray.length;i++){
      for(let a=0;a<secondArray.length;a++){
         if(primerArray[i]===secondArray[a]){
            nuevoArray.push(primerArray[i]);
         }
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
