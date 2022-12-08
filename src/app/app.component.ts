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
}
