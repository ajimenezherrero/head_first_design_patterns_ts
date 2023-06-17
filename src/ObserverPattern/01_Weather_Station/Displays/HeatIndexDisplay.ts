import { Observer } from '../Observer/Observer';
import { WeatherData } from '../Subject/WeatherData';
import { DisplayElement } from './DisplayElement';

export class HeatIndexDisplay implements Observer, DisplayElement {
  public name = 'HeatIndexDisplay';
  private heatIndex = 0.0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }


  display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }
  
  update(temp: number, humidity: number, pressure: number): void {
    this.heatIndex = this.calculateHeatIndex(temp, humidity)
    this.display()
  }

  private calculateHeatIndex(temp: number, humidity: number): number {
    const index = ((16.923 + (0.185212 * temp) + (5.37941 * humidity) - (0.100254 * temp * humidity) 
			+ (0.00941695 * (temp * temp)) + (0.00728898 * (humidity * humidity)) 
			+ (0.000345372 * (temp * temp * humidity)) - (0.000814971 * (temp * humidity * humidity)) +
			(0.0000102102 * (temp * temp * humidity * humidity)) - (0.000038646 * (temp * temp * temp)) + (0.0000291583 * 
			(humidity * humidity * humidity)) + (0.00000142721 * (temp * temp * temp * humidity)) + 
			(0.000000197483 * (temp * humidity * humidity * humidity)) - (0.0000000218429 * (temp * temp * temp * humidity * humidity)) +
			0.000000000843296 * (temp * temp * humidity * humidity * humidity)) -
			(0.0000000000481975 * (temp * temp * temp * humidity * humidity * humidity)));
    return Math.round((index + Number.EPSILON) * 100000) / 100000;
  }
}