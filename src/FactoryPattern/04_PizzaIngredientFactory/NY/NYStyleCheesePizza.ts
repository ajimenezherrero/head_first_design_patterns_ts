import { PizzaIngredientFactory } from '../Ingredient/PizzaIngredientFactory';
import { Pizza } from '../Pizza/Pizza';

export class NYStyleCheesePizza extends Pizza {
  constructor(private ingredientFactory: PizzaIngredientFactory) {
    super();
  }

  prepare(): void {
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}