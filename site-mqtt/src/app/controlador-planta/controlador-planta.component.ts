import { Component } from '@angular/core';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-controlador-planta',
  imports: [],
  templateUrl: './controlador-planta.component.html',
  styleUrl: './controlador-planta.component.css'
})
export class ControladorPlantaComponent {
  message: string = '';
  constructor(private mqttService: MqttService) {}

  ngOnInit(): void {
    this.mqttService.message$.subscribe((msg) => {
      this.message = msg;
    });
  }
  executa(){
  console.log('Teste');
  }

  

}
