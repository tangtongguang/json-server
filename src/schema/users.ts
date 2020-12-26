
import { generate, addMin } from '../jsf/utils';

export const schema: jsf.Schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['id'],
    properties: {
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


  return data;
}


