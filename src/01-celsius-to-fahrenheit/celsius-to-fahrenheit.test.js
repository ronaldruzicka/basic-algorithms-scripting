import { convertToF } from './celsius-to-fahrenheit';

describe('Convert Celsius to Fahrenheit', () => {
  it('should return a number', () => {
    expect(typeof convertToF(0)).toBe('number');
  });

  it('should return a value of -22', () => {
    expect(convertToF(-30)).toBe(-22);
  });

  it('should return a value of 14', () => {
    expect(convertToF(-10)).toBe(14);
  });

  it('should return a value of 32', () => {
    expect(convertToF(0)).toBe(32);
  });

  it('should return a value of 68', () => {
    expect(convertToF(20)).toBe(68);
  });

  it('should return a value of 86', () => {
    expect(convertToF(30)).toBe(86);
  });
});
