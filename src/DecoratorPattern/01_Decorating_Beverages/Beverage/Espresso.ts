import { Beverage } from '../Abstract/Beverage';

export class Espresso extends Beverage {
  description: string = 'Espresso';

  cost(): number {
    return 1.99;
  }
}