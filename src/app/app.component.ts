import { Component } from '@angular/core';

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
}
