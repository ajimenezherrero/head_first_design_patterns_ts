import { FlyBehaviour } from "./FlyBehaviour";

export class FlyRocketPowered implements FlyBehaviour {
  fly() {
    console.log('- This duck can fly with a rocket');
  }
}