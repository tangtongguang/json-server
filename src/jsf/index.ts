import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance'
import register from './formats'
jsf.extend('faker', () => {
  return faker;
})
register(jsf);
export default jsf.extend('chance', () => {
  let chance = new Chance();
  chance.mixin({
    'user': function () {
      return {
        first: chance.first()
      }

    }
  })


  //faker.locale = 'zh_CN'
  return chance;
})
