import {Cafe, CafeType} from "../model";
import {faker} from "@faker-js/faker";

export class CafeFixture{
  static create(withOptionals?:boolean){
    return !withOptionals ?
        new Cafe(
          faker.number.int({min:1,max:100}),
          faker.string.alpha(),
          faker.helpers.enumValue(CafeType),
          faker.string.alpha())
        :
        new Cafe(
          faker.number.int({min:1,max:100}),
          faker.string.alpha(),
          faker.helpers.enumValue(CafeType),
          faker.string.alpha(),
          faker.string.alpha(),
          faker.number.int({min:1000,max:2000}),
          faker.image.url());

  }


  static createMany(howMany:number,withOptionals?:boolean){
    return Array.from({length:howMany}, ()=>this.create(withOptionals))
  }

}
