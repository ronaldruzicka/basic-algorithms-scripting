import { confirmEnding } from './confirm-the-ending';

describe('Confirm the Ending', () => {
  it('should return true', () => {
    expect(confirmEnding('Bastian', 'n')).toBeTruthy();
  });

  it('should return true', () => {
    expect(confirmEnding('Congratulation', 'on')).toBeTruthy();
  });

  it('should return false', () => {
    expect(confirmEnding('Connor', 'n')).toBeFalsy();
  });

  it('should return false', () => {
    expect(
      confirmEnding(
        'Walking on water and developing software from a specification are easy if both are frozen',
        'specification',
      ),
    ).toBeFalsy();
  });

  it('should return true', () => {
    expect(confirmEnding('He has to give me a new name', 'name')).toBeTruthy();
  });

  it('should return true', () => {
    expect(confirmEnding('Open sesame', 'same')).toBeTruthy();
  });

  it('should return false', () => {
    expect(confirmEnding('Open sesame', 'sage')).toBeFalsy();
  });

  it('should return false', () => {
    expect(confirmEnding('Open sesame', 'game')).toBeFalsy();
  });

  it('should return false', () => {
    expect(
      confirmEnding(
        'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
        'mountain',
      ),
    ).toBeFalsy();
  });

  it('should return true', () => {
    expect(confirmEnding('Abstraction', 'action')).toBeTruthy();
  });
});
