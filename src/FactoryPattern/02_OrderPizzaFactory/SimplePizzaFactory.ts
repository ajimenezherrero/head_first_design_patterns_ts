import { CheesePizza } from './Pizza/CheesePizza';
import { ClamPizza } from './Pizza/ClamPizza';
import { GreekPizza } from './Pizza/GreekPizza';
import { PepperoniPizza } from './Pizza/PepperoniPizza';
import { Pizza } from './Pizza/Pizza';
import { VeggiePizza } from './Pizza/VeggiePizza';

export enum PizzaTypes {
  cheese = 'Cheese',
  greek = 'Greek',
  pepperoni = 'Pepperoni',
  clam = 'Clam',
  veggie = 'Veggie',
}

export class SimplePizzaFactory {
  createPizza(type: PizzaTypes) {
    let pizza: Pizza;

    if (type === PizzaTypes.cheese) {
      pizza = new CheesePizza();
    } else if (type === PizzaTypes.greek) {
      pizza = new GreekPizza();
    } else if (type === PizzaTypes.pepperoni) {
      pizza = new PepperoniPizza();
    } else if (type === PizzaTypes.clam) {
      pizza = new ClamPizza();
    } else if (type === PizzaTypes.veggie) {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}