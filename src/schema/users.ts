import jsf from 'json-schema-faker';

export const usersSchema: jsf.Schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },

    }
  }
}

const users = jsf.generate(usersSchema);


export default users;