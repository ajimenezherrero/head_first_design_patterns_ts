import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza';
import { Pizza } from '../Pizza/Pizza';
import { PizzaTypes } from '../Pizza/PizzaTypes';
import { PizzaFactory } from '../PizzaFactory';

export class ChicagoPizzaFactory implements PizzaFactory {
  createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;

    if (type === PizzaTypes.cheese) {
      pizza = new ChicagoStyleCheesePizza();
    } // else if (type === PizzaTypes.greek) {
    //   pizza = new GreekPizza();
    // } else if (type === PizzaTypes.pepperoni) {
    //   pizza = new GreekPizza();
    // } else if (type === PizzaTypes.clam) {
    //   pizza = new ClamPizza();
    // } else if (type === PizzaTypes.veggie) {
    //   pizza = new VeggiePizza();
    // }

    return pizza;
  }
}