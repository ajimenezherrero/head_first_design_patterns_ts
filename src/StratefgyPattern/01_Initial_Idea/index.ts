import { MallardDuck } from "./MallardDuck";
import { RedheadDuck } from "./RedheadDuck";

const duck1 = new MallardDuck();
const duck2 = new RedheadDuck();

console.log('Duck 1');
duck1.quack();
duck1.swim();
duck1.display();

console.log('Duck 2');
duck2.quack();
duck2.swim();
duck2.display();
