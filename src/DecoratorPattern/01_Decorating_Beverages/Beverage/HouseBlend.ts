import { Beverage } from '../Abstract/Beverage';

export class HouseBlend extends Beverage {
  description: string = 'House Blend';

  cost(): number {
    return 0.89;
  }
}