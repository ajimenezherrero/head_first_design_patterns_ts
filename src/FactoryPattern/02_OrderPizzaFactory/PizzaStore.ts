import { Pizza } from './Pizza/Pizza';
import { PizzaTypes, SimplePizzaFactory } from './SimplePizzaFactory';


export class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: PizzaTypes): Pizza {
    const pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}