export class MathLibrary {
    add(a: number, b: number): number {
      return a + b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    square(a: number): number {
      return a * a;
    }
  
    random(a: number, b: number): number {
      return Math.floor(Math.random() * 35) + 1;
    }
  }