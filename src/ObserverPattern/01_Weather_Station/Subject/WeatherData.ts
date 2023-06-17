import { Observer } from '../Observer/Observer';
import { Subject } from './Subject';

export class WeatherData implements Subject {
  private observers: Map<string, Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = new Map();
  }

  registerObserver(obs: Observer): void {
    this.observers.set(obs.name, obs);
  }

  removeObserver(obs: Observer): void {
    this.observers.delete(obs.name);
  }

  notifyObservers(): void {
    this.observers.forEach(obs => {
      obs.update(this.temperature, this.humidity, this.pressure);
    })
  }

  measurementsChanged() {
    this.notifyObservers()
  }

  setMeasurements(temp: number, humidity: number, pressure:number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged()
  }
}