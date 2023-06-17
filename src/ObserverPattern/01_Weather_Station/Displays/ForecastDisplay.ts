import { Observer } from '../Observer/Observer';
import { WeatherData } from '../Subject/WeatherData';
import { DisplayElement } from './DisplayElement';

export class ForecastDisplay implements Observer, DisplayElement {
  public name = 'ForecastDisplay';
  private currentPressure = 29.92;
  private lastPressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }


  display(): void {
		if (this.currentPressure > this.lastPressure) {
			console.log('Forecast: Improving weather on the way!');
		} else if (this.currentPressure === this.lastPressure) {
			console.log('Forecast: More of the same');
		} else if (this.currentPressure < this.lastPressure) {
			console.log('Forecast: Watch out for cooler, rainy weather');
		}
  }
  
  update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display()
  }
}