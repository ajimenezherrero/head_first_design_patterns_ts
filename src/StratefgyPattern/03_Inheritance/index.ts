import { DecoyDuck } from "./DecoyDuck";
import { MallardDuck } from "./MallardDuck";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";

const mallardDuck = new MallardDuck();
const redheadDuck = new RedheadDuck();
const rubberDuck = new RubberDuck();
const decoyDuck = new DecoyDuck();

console.log('Mallard Duck');
mallardDuck.quack();
mallardDuck.swim();
mallardDuck.display();
mallardDuck.fly();

console.log('Redhead Duck');
redheadDuck.quack();
redheadDuck.swim();
redheadDuck.display();
redheadDuck.fly();

console.log('Rubber Duck');
rubberDuck.quack();
rubberDuck.swim();
rubberDuck.display();
rubberDuck.fly();

console.log('Decoy Duck');
decoyDuck.quack();
decoyDuck.swim();
decoyDuck.display();
decoyDuck.fly();
