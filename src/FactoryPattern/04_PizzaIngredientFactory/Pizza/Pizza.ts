import { Cheese } from '../Ingredient/Cheese';
import { Clams } from '../Ingredient/Clams';
import { Dough } from '../Ingredient/Dough';
import { Pepperoni } from '../Ingredient/Pepperoni';
import { Sauce } from '../Ingredient/Sauce';
import { Veggie } from '../Ingredient/Veggie';

export abstract class Pizza {
  name: string;
  dough: Dough;
  sauce: Sauce;
  veggies: Veggie[];
  cheese: Cheese;
  peperoni: Pepperoni;
  clams: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}