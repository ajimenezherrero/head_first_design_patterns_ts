import { CheesePizza } from './CheesePizza';
import { GreekPizza } from './GreekPizza';
import { PepperoniPizza } from './PepperoniPizza';
import { Pizza } from './Pizza';

export enum PizzaTypes {
  cheese = 'Cheese',
  greek = 'Greek',
  pepperoni = 'Pepperoni',
}
export class Pizzeria {
  static orderPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;

    if (type === 'Cheese') {
      pizza = new CheesePizza();
    } else if (type === 'Greek') {
      pizza = new GreekPizza();
    } else {
      pizza = new PepperoniPizza();
    }

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}