import { titleCase } from './title-case-a-sentence';

describe('Finders keepers', () => {
  it('should return a string', () => {
    expect(typeof titleCase("I'm a little tea pot")).toBe('string');
  });

  it("should return the string I'm A Little Tea Pot", () => {
    expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  });

  it('should return the string Short And Stout', () => {
    expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  });

  it('should return the string Here Is My Handle Here Is My Spout', () => {
    expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
      'Here Is My Handle Here Is My Spout',
    );
  });
});
