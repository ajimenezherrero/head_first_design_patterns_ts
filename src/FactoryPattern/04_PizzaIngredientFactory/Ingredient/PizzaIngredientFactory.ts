import { Clams } from './Clams';
import { Dough } from './Dough';
import { Sauce } from './Sauce';
import { Cheese } from './Cheese';
import { Veggie } from './Veggie';
import { Pepperoni } from './Pepperoni';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggie[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}