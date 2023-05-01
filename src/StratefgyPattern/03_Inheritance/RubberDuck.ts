import { Duck } from "./Duck";

export class RubberDuck extends Duck {
  quack(): void {
    console.log('- This duck can squeak');
  }

  fly(): void {}

  display() {
    console.log('- Looks like a rubber');
  }
}