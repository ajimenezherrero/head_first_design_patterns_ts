import { FlyBehaviour } from './methods/Fly/FlyBehaviour';
import { QuackBehaviour } from './methods/Quack/QuackBehaviour';

export abstract class Duck {
  flyBehaviour: FlyBehaviour;
  quakBehaviour: QuackBehaviour;

  constructor(flyBehaviour: FlyBehaviour, quakBehaviour: QuackBehaviour) {
    this.flyBehaviour = flyBehaviour;
    this.quakBehaviour = quakBehaviour;
  }

  swim() {
    console.log('- This duck can swim');
  }

  performQuak() {
    this.quakBehaviour.quack();
  }

  performFly() {
    this.flyBehaviour.fly();
  }

  abstract display(): void;
}