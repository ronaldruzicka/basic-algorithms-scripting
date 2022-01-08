import { reverseString, reverseStringRecursion } from './reverse-string';

describe('Reverse a string', () => {
  it('should return a string ', () => {
    expect(typeof reverseString('hello')).toBe('string');
    expect(typeof reverseStringRecursion('hello')).toBe('string');
  });

  it('should return the string olleh ', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseStringRecursion('hello')).toBe('olleh');
  });

  it('should return the string ydwoH ', () => {
    expect(reverseString('Howdy')).toBe('ydwoH');
    expect(reverseStringRecursion('Howdy')).toBe('ydwoH');
  });

  it('should return the string htraE morf sgniteerG ', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
    expect(reverseStringRecursion('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });
});
