import { CurrentConditionsDisplay } from './Displays/CurrentConditionsDisplay';
import { ForecastDisplay } from './Displays/ForecastDisplay';
import { StatisticsDisplay } from './Displays/StatisticsDisplay';
import { WeatherData } from './Subject/WeatherData';

export class WeatherStation {
  static start(): void {
    const weatherData = new WeatherData();

    const currentConditionDisplay = new CurrentConditionsDisplay(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(20, 65, 30.4);
    weatherData.setMeasurements(35, 70, 29.2);
    weatherData.setMeasurements(42, 90, 29.2);
  }
}