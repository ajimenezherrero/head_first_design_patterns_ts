import { FlyBehaviour } from "./FlyBehaviour";

export class FlyWithWings implements FlyBehaviour {
  fly() {
    console.log('- This duck can fly');
  }
}