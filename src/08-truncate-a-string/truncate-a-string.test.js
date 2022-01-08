import { truncateString } from './truncate-a-string';

describe('Truncate a string', () => {
  it('should return the string A-tisket...', () => {
    expect(truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe('A-tisket...');
  });

  it('should return the string Peter Piper...', () => {
    expect(truncateString('Peter Piper picked a peck of pickled peppers', 11)).toBe(
      'Peter Piper...',
    );
  });

  it('should return the string A-tisket a-tasket A green and yellow basket', () => {
    expect(
      truncateString(
        'A-tisket a-tasket A green and yellow basket',
        'A-tisket a-tasket A green and yellow basket'.length,
      ),
    ).toBe('A-tisket a-tasket A green and yellow basket');
  });

  it('should return the string A-tisket a-tasket A green and yellow basket', () => {
    expect(
      truncateString(
        'A-tisket a-tasket A green and yellow basket',
        'A-tisket a-tasket A green and yellow basket'.length + 2,
      ),
    ).toBe('A-tisket a-tasket A green and yellow basket');
  });

  it('should return the string A...', () => {
    expect(truncateString('A-', 1)).toBe('A...');
  });

  it('should return the string Ab...', () => {
    expect(truncateString('Absolutely Longer', 2)).toBe('Ab...');
  });
});
