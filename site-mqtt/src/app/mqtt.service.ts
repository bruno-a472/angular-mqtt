import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as mqtt from 'mqtt';


@Injectable({
  providedIn: 'root',
})
export class MqttService {
  private client!: MqttClient;
  private messageSubject = new BehaviorSubject<string>('');

  message$ = this.messageSubject.asObservable();

  constructor() {
    this.connectToBroker();
  }

  private connectToBroker(): void {
    this.client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');
    this.client = connect('ws://broker.emqx.io:8083/mqtt'); // Substitua pelo seu broker
    this.client.on('connect', () => {
      console.log('Conectado ao MQTT');
      this.client.subscribe('BananaOmastar', (err) => {
        if (err) {
          console.error('Erro ao se inscrever no tópico:', err);
        }
      });
    });

    this.client.on('message', (topic, message) => {
      console.log(`Mensagem recebida: ${message.toString()}`);
      this.messageSubject.next(message.toString());
    });

    this.client.on('error', (err) => {
      console.error('Erro no MQTT:', err);
    });
  }
}
