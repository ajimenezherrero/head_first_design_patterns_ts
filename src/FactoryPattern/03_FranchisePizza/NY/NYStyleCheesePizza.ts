import { Pizza } from '../Pizza/Pizza';

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = 'NY Style Sauce and Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings = ['Grated Reggiano Cheese'];
  }
}