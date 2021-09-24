/* Animal class imported */
import Animal from './animal.js';
/* Created dog object from animal class */
export default class Dog extends Animal {
  constructor(name, age, image, numberOfLegs = 4) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
