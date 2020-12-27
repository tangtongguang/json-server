
import { red } from 'chalk';
import { generate, addMin } from '../jsf/utils';

export const schema: jsf.Schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['year', 'pattern', 'date', 'faker', 'fixedValues', 'positiveInt'],
    properties: {
      year: {
        type: 'string',
        chance: {
          year: {
            min: 1939,
            max: 1940
          }
        }
      },
      pattern: {
        type: 'string',
        pattern: 'yes|no'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      faker: {
        type: 'string',
        faker: {
          fake: "{{name.lastName}},{{name.suffix}}"
        }
      },
      danamicValues: {
        type: 'array',
        items:
          { type: 'integer', initialOffset: 100, autoIncrement: true }
        ,
        minItems: 10,
        maxItems: 11
      },
      fixedValues: {
        type: 'array',
        items: [
          { type: 'integer', minimum: 0, maximum: 1, exclusiveMinimum: 0 }
        ]
      },
      positiveInt: {
        type: 'integer',
        minimum: 0,
        maximum: 1,
        exclusiveMinimum: true
      },
      id: {
        type: 'object',
        chance: "user"
      },
      url: {
        type: 'string',
        faker: 'address.city'
      },
      ref: {
        $ref: 'otherSchema'
      },
      ser: {
        type: 'string',
        format: 'semver'
      }

    }
  }
}

export interface User {
  id: string,
  url: string,
  name: string
}

export const genUsers = async (num?: number): Promise<User[]> => {
  const data = await generate(addMin(schema, num))

  console.log(
    red(JSON.stringify(data[0], null, 2)))
  return data;
}


