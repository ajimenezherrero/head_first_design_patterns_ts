import { Duck } from "./Duck";

export class DecoyDuck extends Duck {
  quack(): void {}

  fly(): void {}

  display() {
    console.log('- Looks like a decoy duck');
  }
}