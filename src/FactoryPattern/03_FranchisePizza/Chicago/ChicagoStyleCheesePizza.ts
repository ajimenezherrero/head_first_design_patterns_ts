import { Pizza } from '../Pizza/Pizza';

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = 'Chicago Style Sauce Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings = ['Shredded Mozzarella Cheese'];
  }

  cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}