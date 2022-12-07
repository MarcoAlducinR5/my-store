//Inicializacion de una variable, ya sea no declarando
//con o sin declarar el tipo de dato, con uno o 2 tipos
const username: string = 'sokramr5';

//Funciones con retorno de datos
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3);

//Clases y Programacion Orientada a Objetos
class Person{
  /* age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  } */

  //Reduccion de bloques de codigo a una sola linea
  constructor(public age: number, public lastName: string){}
}

//Creacion de objetos de una clase
const marco = new Person(15, 'Alducin');

marco.age;
marco.lastName;
