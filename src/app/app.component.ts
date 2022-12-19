import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Interpolacion de valores
  name = 'Marco';
  age = 18;
  img = "https://www.dzoom.org.es/wp-content/uploads/2012/03/bosque-17-810x540.jpg";

  names: string[] = ['Nico', 'Juli', 'Santi'];

  newName = '';

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
}
