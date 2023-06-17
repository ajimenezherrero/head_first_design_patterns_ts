import { Beverage } from '../Abstract/Beverage';

export class Decaf extends Beverage {
  description: string = 'Decaf';

  cost(): number {
    return 1.05;
  }
}