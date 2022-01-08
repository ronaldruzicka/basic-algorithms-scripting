import { factorialize } from './factorialize-number';

describe('Factorialize a number', () => {
  it('should return a number', () => {
    factorialize(5);
  });

  it('should return 120', () => {
    factorialize(5);
  });

  it('should return 3628800', () => {
    factorialize(10);
  });

  it('should return 2432902008176640000', () => {
    factorialize(20);
  });

  it('should return 1', () => {
    factorialize(0);
  });
});
