import { Pizza } from './Pizza/Pizza';
import { PizzaTypes } from './Pizza/PizzaTypes';

export abstract class PizzaFactory {
  abstract createPizza(type: PizzaTypes): Pizza
}