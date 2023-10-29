import { NYStyleCheesePizza } from './NYStyleCheesePizza';
import { Pizza } from '../Pizza/Pizza';
import { PizzaTypes } from '../Pizza/PizzaTypes';
import { PizzaFactory } from '../PizzaFactory';

export class NYPizzaFactory implements PizzaFactory {
  createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;

    if (type === PizzaTypes.cheese) {
      pizza = new NYStyleCheesePizza();
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