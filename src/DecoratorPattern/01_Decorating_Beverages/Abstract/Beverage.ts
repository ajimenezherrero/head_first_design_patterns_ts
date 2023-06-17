export abstract class Beverage {
  description: string = 'Unknown';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}