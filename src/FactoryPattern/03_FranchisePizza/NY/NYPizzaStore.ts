import { PizzaStore } from '../PizzaStore';
import { NYPizzaFactory } from './NYPizzaFactory';

export class NYPizzaStore extends PizzaStore {

  constructor() {
    const factory = new NYPizzaFactory();

    super(factory);
  }
}