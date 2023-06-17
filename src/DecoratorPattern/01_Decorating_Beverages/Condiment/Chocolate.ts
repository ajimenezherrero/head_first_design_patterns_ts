import { Beverage } from '../Abstract/Beverage';
import { CondimentDecorator } from '../Abstract/CondimentDecorator';

export class Chocolate extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + 0.20;
  }
}
