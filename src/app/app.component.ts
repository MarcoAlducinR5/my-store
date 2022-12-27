import { Component } from '@angular/core';
import { Product } from './product.model';
import { Partidos } from './partidos.model';
import { Basta } from './basta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  color = "black";
  //Interpolacion de valores
  name = 'Marco';
  age = 18;
  img = "https://www.dzoom.org.es/wp-content/uploads/2012/03/bosque-17-810x540.jpg";

  names: string[] = ['Nico', 'Juli', 'Santi'];

  newName = '';

  partidos: Partidos[] = [
    {
      nombre: 'Partido Acción Nacional (PAN)',
      fundador: 'Manuel Gómez Morin',
      fecha: 1939,
      texto: 'es un partido político mexicano cristiano, de doctrina política conservadora, afín a las ideas de la democracia cristiana. Sus estatutos establecen que su posición ideológica es el humanismo cristiano. Diversos analistas lo definen como un partido de derecha. Los miembros de este partido se denominan panistas.',
      logo: './assets/images/partidos/01-PAN.png'
    },
    {
      nombre: 'Partido Revolucionario Institucional (PRI)',
      fundador: 'Plutarco Elías Calles',
      fecha: 1929,
      texto: 'es un partido político mexicano de centroderecha. Fue fundado el 4 de marzo de 1929 bajo el nombre de Partido Nacional Revolucionario (PNR) por el expresidente Plutarco Elías Calles. En 1938 fue reconstituido como Partido de la Revolución Mexicana (PRM) y en 1946 fue refundado, adoptando su nombre actual. Fue el partido gobernante en México durante setenta años consecutivos, de 1930 a 2000.',
      logo: './assets/images/partidos/02-PRI.png'
    },
    {
      nombre: 'Partido de la Revolución Democrática (PRD)',
      fecha: 1989,
      texto: 'es un partido político mexicano, fundado el 5 de mayo de 1989, con una ideología política socialdemócrata. En las elecciones presidenciales de 2006 y 2012 encabezó coaliciones que los colocaron como la segunda fuerza electoral. Los militantes de este partido se conocen popularmente como perredistas. Su lema es "¡Democracia ya, Patria para todos!".',
      logo: './assets/images/partidos/03-PRD.png'
    },
    {
      nombre: 'Partido del Trabajo (PT)',
      fecha: 1990,
      texto: 'es un partido político de México, fundado el 8 de diciembre de 1990. Es un partido de izquierda y cuenta con el apoyo de diversos sectores populares regionales e internacionales. Su lema es «Unidad Nacional, ¡Todo el poder al Pueblo!».',
      logo: './assets/images/partidos/05-PT.png'
    },
    {
      nombre: 'Partido Verde Ecologista de México (PVEM, Verde)',
      fundador: 'Jorge González Torres',
      fecha: 1986,
      texto: 'es un partido político mexicano. Fue el cuarto partido político en México por número de representantes en el congreso de este país. La mayoría de estas posiciones las ha obtenido gracias a sus alianzas estratégicas con otros partidos.',
      logo: './assets/images/partidos/04-VERDE.png'
    },
    {
      nombre: 'Movimiento Ciudadano (MC)',
      fundador: 'Dante Delgado Rannauro',
      fecha: 1997,
      texto: 'Movimiento Ciudadano es un partido político mexicano de centroizquierda. Fue fundado el 1 de agosto de 1999 bajo el nombre Convergencia por la Democracia. En 2002 se acortó el nombre a Convergencia y en 2011 adoptó su nombre actual.',
      logo: './assets/images/partidos/06-MC.png'
    },
    {
      nombre: 'Movimiento Regeneración Nacional (MORENA)',
      fundador: 'Andrés Manuel López Obrador',
      fecha: 2012,
      texto: 'es un partido político mexicano de izquierda. Fue creado el 2 de octubre de 2011 como un movimiento político y social impulsado por Andrés Manuel López Obrador, como parte de su campaña presidencial en las elecciones federales de 2012. Más tarde el movimiento se constituyó como una asociación civil el 20 de noviembre de 2012.',
      logo: './assets/images/partidos/07-MORENA.png'
    }
  ]

  //Muestra de elementos de un array
  products: Product[]= [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  letras: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  numero: number = Math.floor(Math.random()*this.letras.length);
  cosas: any[] = [];
  aspectos: string[] = ['Alimentos', 'Frutas y Verduras',
    'Palabras en Ingles', 'Acciones', 'Articulos Escolares', 'Ropa',
    'Profesiones', 'Marcas', 'Personajes de Peliculas', 'Cantantes',
    'Actores y Actrices', 'Tecnicismos', 'Paises', 'Nombres',
    'Apellidos', 'Ciudades de México', 'Ciudades del mundo'];
  registro = this.aspectos[Math.floor(Math.random()*this.aspectos.length)];

  //Modificar las propiedades de elementos de HTML
  btnDisabled = true;
  person = {
    name: this.name,
    age: this.age,
    avatar: this.img
  }

  //Manejo de eventos a componentes
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  dobleClick:string = "Haz Doble Click";
  dobleClic(event: Event){
    const element = event.target as HTMLElement;
    alert("¡Haz hecho doble click");
    console.log(element);
  }
  texto1:string = "Pasa el mouse aqui";
  pasaElMouse(event: Event){
    const element = event.target as HTMLElement;
    this.texto1 = "¡Bien, pasaste el mouse! ¿Viste que cambio?";
    element.style.background = "green";
    // console.log(element.style.background);
    element.style.color = "RGB(0,0,0)";
  }
  alejaElMouse(event: Event){
    const element = event.target as HTMLElement;
    this.texto1 = "¡Ups, volvio a cambiar! XD Pasalo otra vez";
    element.style.background = "RGB(0,12,34)";
    element.style.color = "white";
  }
  mensaje:string = "Selecciona la caja";
  enfoque(event: Event){
    const element = event.target as HTMLElement;
    this.mensaje = "¡Bien, esta enfocado! ¿Viste que cambio?";
  }
  desenfoque(event: Event){
    const element = event.target as HTMLElement;
    this.mensaje = "¡Chin, ya no tiene enfoque! =( Haz clic de nuevo";
  }

  //Agregar elementos a un arreglo
  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }
  deleteName(index: number){
    this.names.splice(index,1);
  }

  error: string = '';

  agregar(){
    if(this.newName.charAt(0).toLowerCase() == this.letras.charAt(this.numero)){
      this.cosas.push(this.newName);
      this.btnDisabled = false;
    }
    else if(this.newName.charAt(0) == this.letras.charAt(this.numero).toLowerCase()){
      this.cosas.push(this.newName);
      this.btnDisabled = false;
    }
    else if(this.newName.charAt(0) == this.letras.charAt(this.numero)){
      this.cosas.push(this.newName);
      this.btnDisabled = false;
    }
    else{
      this.error = "Ingrese con la letra " + this.letras.charAt(this.numero);
      this.btnDisabled = true;
    }

    this.newName = "";
  }
  borrar(index: number){
    this.cosas.splice(index,1);
  }

  //////////////////////////////////////////////////////////////
  basta: Basta[] = []

  nameB: string = ''; lastNameB: string = ''; animalB: string = '';
  fruitB: string = ''; cityB: string = ''; objectB: string = '';
  colorB: string = ''; songB: string = '';

  abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  num = Math.floor(Math.random()*this.abecedario.length);
  aleatorio = this.abecedario.charAt(this.num);

  agregarBasta(){
    this.basta.push({
      letra: this.aleatorio, nombre: this.nameB, apellido: this.lastNameB,
      animal: this.animalB, florFruto: this.fruitB, ciudadPais: this.cityB,
      cosa: this.objectB, color: this.colorB, cancion: this.songB
    });

    this.aleatorio = this.abecedario.charAt(this.num);
    this.nameB = this.lastNameB = this.lastNameB = this.animalB =
    this.fruitB = this.cityB = this.objectB = this.colorB =
    this.songB = "";
  }

}
