import { NYStyleCheesePizza } from './NYStyleCheesePizza';
import { Pizza } from '../Pizza/Pizza';
import { PizzaTypes } from '../Pizza/PizzaTypes';
import { PizzaFactory } from '../PizzaFactory';
import { PizzaIngredientFactory } from '../Ingredient/PizzaIngredientFactory';

export class NYPizzaFactory implements PizzaFactory {
  constructor(private ingredientFactory: PizzaIngredientFactory) {}

  createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;

    if (type === PizzaTypes.cheese) {
      pizza = new NYStyleCheesePizza(this.ingredientFactory);
      pizza.setName('NY Style Sauce and Cheese Pizza');
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