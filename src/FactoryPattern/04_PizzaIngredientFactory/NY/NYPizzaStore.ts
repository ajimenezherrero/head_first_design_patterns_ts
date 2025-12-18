import { PizzaStore } from '../PizzaStore';
import { NYPizzaFactory } from './NYPizzaFactory';
import { NYPizzaIngredientFactory } from './NYPizzaIngredientFactory';

export class NYPizzaStore extends PizzaStore {

  constructor() {
    const ingredientFactory = new NYPizzaIngredientFactory();
    const pizzaFactory = new NYPizzaFactory(ingredientFactory);

    super(pizzaFactory);
  }
}