import { repeatStringNumTimes } from './repeat-a-string';

describe('Repeat a string', () => {
  it('should return the string ***', () => {
    expect(repeatStringNumTimes('*', 3)).toBe('***');
  });

  it('should return the string abcabcabc', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc');
  });

  it('should return the string abcabcabcabc', () => {
    expect(repeatStringNumTimes('abc', 4)).toBe('abcabcabcabc');
  });

  it('should return the string abc', () => {
    expect(repeatStringNumTimes('abc', 1)).toBe('abc');
  });

  it('should return the string ********', () => {
    expect(repeatStringNumTimes('*', 8)).toBe('********');
  });

  it('should return an empty string ("")', () => {
    expect(repeatStringNumTimes('abc', -2)).toBe('');
  });

  it('should return ""', () => {
    expect(repeatStringNumTimes('abc', 0)).toBe('');
  });
});
