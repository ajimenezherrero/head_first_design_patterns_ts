import { Beverage } from '../Abstract/Beverage';

export class DarkRoast extends Beverage {
  description: string = 'Dark Roast';

  cost(): number {
    return 0.99;
  }
}