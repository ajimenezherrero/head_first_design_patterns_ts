import { Beverage } from './Abstract/Beverage';
import { DarkRoast } from './Beverage/DarkRoast';
import { Espresso } from './Beverage/Espresso';
import { HouseBlend } from './Beverage/HouseBlend';
import { Chocolate } from './Condiment/Chocolate';
import { Soy } from './Condiment/Soy';
import { Whip } from './Condiment/Whip';

export class StarbuzzCoffee {
  main() {
    const beverage = new Espresso();
    this.serveBeverage(beverage);

    let beverage2 = new DarkRoast();
    beverage2 = new Chocolate(beverage2);
    beverage2 = new Chocolate(beverage2);
    beverage2 = new Whip(beverage2);
    this.serveBeverage(beverage2);

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Chocolate(beverage3);
    beverage3 = new Whip(beverage3);
    this.serveBeverage(beverage3);
  }

  private serveBeverage(beverage: Beverage) {
    console.log(`${beverage.getDescription()} $${beverage.cost()}`)
  }
}