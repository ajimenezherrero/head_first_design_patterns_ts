import { Beverage } from '../Abstract/Beverage';
import { CondimentDecorator } from '../Abstract/CondimentDecorator';

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
