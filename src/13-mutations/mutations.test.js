import { mutation } from './mutations';

describe('Where do I belong', () => {
  it('should return false', () => {
    expect(mutation(['hello', 'hey'])).toBeFalsy();
  });

  it('should return true', () => {
    expect(mutation(['hello', 'Hello'])).toBeTruthy();
  });

  it('should return true', () => {
    expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toBeTruthy();
  });

  it('should return true', () => {
    expect(mutation(['Mary', 'Army'])).toBeTruthy();
  });

  it('should return true', () => {
    expect(mutation(['Mary', 'Aarmy'])).toBeTruthy();
  });

  it('should return true', () => {
    expect(mutation(['Alien', 'line'])).toBeTruthy();
  });

  it('should return true', () => {
    expect(mutation(['floor', 'for'])).toBeTruthy();
  });

  it('should return false', () => {
    expect(mutation(['hello', 'neo'])).toBeFalsy();
  });

  it('should return false', () => {
    expect(mutation(['voodoo', 'no'])).toBeFalsy();
  });

  it('should return false', () => {
    expect(mutation(['ate', 'date'])).toBeFalsy();
  });

  it('should return false', () => {
    expect(mutation(['Tiger', 'Zebra'])).toBeFalsy();
  });

  it('should return true', () => {
    expect(mutation(['Noel', 'Ole'])).toBeTruthy();
  });
});
