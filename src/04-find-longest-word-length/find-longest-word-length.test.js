import { findLongestWordLength } from './find-longest-word-length';

describe('Find the Longest Word in a String', () => {
  it('should return a number', () => {
    expect(typeof findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(
      'number',
    );
  });

  it('should return 6', () => {
    expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6);
  });

  it('should return 5', () => {
    expect(findLongestWordLength('May the force be with you')).toBe(5);
  });

  it('should return 6', () => {
    expect(findLongestWordLength('Google do a barrel roll')).toBe(6);
  });

  it('should return 8', () => {
    expect(
      findLongestWordLength('What is the average airspeed velocity of an unladen swallow'),
    ).toBe(8);
  });

  it('should return 19', () => {
    expect(
      findLongestWordLength('What if we try a super-long word such as otorhinolaryngology'),
    ).toBe(19);
  });
});
