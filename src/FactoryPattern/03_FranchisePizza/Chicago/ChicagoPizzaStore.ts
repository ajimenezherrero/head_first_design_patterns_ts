import { PizzaStore } from '../PizzaStore';
import { ChicagoPizzaFactory } from './ChicagoPizzaFactory';

export class ChicagoPizzaStore extends PizzaStore {

  constructor() {
    const factory = new ChicagoPizzaFactory();

    super(factory);
  }
}