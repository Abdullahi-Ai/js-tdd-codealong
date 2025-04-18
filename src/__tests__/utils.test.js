
import { currentAgeForBirthYear } from '../utils';

describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;
    
    const result = currentAgeForBirthYear(birthYear);
    
    expect(result).toBe(expectedAge);
  });

  // Additional test cases
  it('returns 0 when born this year', () => {
    const currentYear = new Date().getFullYear();
    expect(currentAgeForBirthYear(currentYear)).toBe(0);
  });

  it('returns negative age for future birth years', () => {
    const futureYear = new Date().getFullYear() + 5;
    expect(currentAgeForBirthYear(futureYear)).toBe(-5);
  });
});