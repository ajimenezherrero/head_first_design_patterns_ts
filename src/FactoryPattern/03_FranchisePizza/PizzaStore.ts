import { Pizza } from './Pizza/Pizza';
import { PizzaTypes } from './Pizza/PizzaTypes';
import { PizzaFactory } from './PizzaFactory';


export abstract class PizzaStore {
  factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
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