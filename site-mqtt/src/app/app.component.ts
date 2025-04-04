import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ControladorPlantaComponent } from "./controlador-planta/controlador-planta.component";

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ ControladorPlantaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-mqtt';
}
