/* Animal class imported */
import Animal from './animal.js';
/* Created duck object from animal class */
export default class Duck extends Animal {
  constructor(name, age, image, numberOfLegs = 2) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
