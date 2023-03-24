export abstract class Duck {
  quack() {
    console.log('- This duck can quak');
  }

  swim() {
    console.log('- This duck can swim');
  }

  fly() {
    console.log('- This duck can fly');
  }

  abstract display(): void;
}