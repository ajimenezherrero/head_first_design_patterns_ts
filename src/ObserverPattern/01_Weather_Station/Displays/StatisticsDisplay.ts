import { Observer } from '../Observer/Observer';
import { WeatherData } from '../Subject/WeatherData';
import { DisplayElement } from './DisplayElement';

export class StatisticsDisplay implements Observer, DisplayElement {
  public name = 'StatisticsDisplay';
  private maxTemp = 0.0;
	private minTemp = 200;
	private tempSum = 0.0;
	private numReadings = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }


  display(): void {
    console.log(`Avg/Max/Min temperature = ${(this.tempSum)/(this.numReadings)}/${this.maxTemp}/${this.minTemp}`);
  }
  
  update(temp: number, humidity: number, pressure: number): void {
    this.tempSum += temp;
		this.numReadings++;

		if (temp > this.maxTemp) {
			this.maxTemp = temp;
		}
 
		if (temp < this.minTemp) {
			this.minTemp = temp;
		}

    this.display()
  }
}