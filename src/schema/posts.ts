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

export interface Post {

  id: string
}

export const genPosts = async (num?: number): Promise<Post[]> => {
  const data = await generate(addMin(schema, num))


  return data;
}


