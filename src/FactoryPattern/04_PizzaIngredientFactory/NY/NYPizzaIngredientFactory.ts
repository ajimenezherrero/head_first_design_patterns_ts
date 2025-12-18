import { PizzaIngredientFactory } from '../Ingredient/PizzaIngredientFactory';
import { Veggie } from '../Ingredient/Veggie';
import { Garlic } from './Ingredient/Garlic';
import { Onion } from './Ingredient/Onion';
import { Mushroom } from './Ingredient/Mushroom';
import { RedPepper } from './Ingredient/RedPepper';
import { ThinCrustDough } from './Ingredient/ThinCrustDough';
import { MarinaraSauce } from './Ingredient/MarinaraSauce';
import { ReggianoCheese } from './Ingredient/ReggianoCheese';
import { SlicedPepperoni } from './Ingredient/SlicedPepperoni';
import { FreshClams } from './Ingredient/FreshClams';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies(): Veggie[] {
    const veggies: Veggie[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    return veggies;
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreshClams();
  }
}