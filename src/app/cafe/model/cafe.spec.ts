import { Cafe, CafeType } from './cafe';
import {fa, faker} from "@faker-js/faker";



describe('Cafe', () => {
  faker.seed(100);


  it('should create an instance with required params only', () => {
    expect(new Cafe(
      faker.number.int({min:1,max:100}),
      faker.string.alpha(),
      faker.helpers.enumValue(CafeType),
      faker.string.alpha(),
    )).toBeTruthy();
  });


  it('should create an instance with required and optionals params', () => {
    expect(new Cafe(
      faker.number.int({min:1,max:100}),
      faker.string.alpha(),
      faker.helpers.enumValue(CafeType),
      faker.string.alpha(),
      faker.string.alpha(),
      faker.number.int({min:1000,max:2000}),
      faker.image.url(),
    )).toBeTruthy();
  });
});
