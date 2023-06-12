import { Observer } from '../Observer/Observer';
import { WeatherData } from '../Subject/WeatherData';
import { DisplayElement } from './DisplayElement';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  public name = 'CurrentConditionsDisplay';
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }


  display(): void {
    console.log(`Current conditions: ${this.temperature}ºC degrees and ${this.humidity}% humidity`);
  }
  
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;

    this.display()
  }
}