import jsf from 'json-schema-faker';
import faker from 'faker';
export default jsf.extend('faker', () => {
  return faker;
})