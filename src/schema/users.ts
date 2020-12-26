import jsf from 'json-schema-faker';
import { generate, addMin } from './utils';

export const schema: jsf.Schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },

    }
  }
}

export interface User {

  id: string
}

export const genUsers = async (num?: number): Promise<User[]> => {
  const data = await generate(addMin(schema, num))


  return data;
}


