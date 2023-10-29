import { ChicagoPizzaStore } from './Chicago/ChicagoPizzaStore';
import { NYPizzaStore } from './NY/NYPizzaStore';
import { PizzaTypes } from './Pizza/PizzaTypes';

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza(PizzaTypes.cheese);
console.log(`Etahn ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza(PizzaTypes.cheese);
console.log(`Joel ordered a ${pizza.getName()}`);
