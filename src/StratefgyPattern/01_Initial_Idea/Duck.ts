export abstract class Duck {
  quack() {
    console.log('- This duck can quak')
  }

  swim() {
    console.log('- This duck can swim')
  }

  abstract display(): void;
}