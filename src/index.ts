import schema from './schema'

import { red, green } from 'chalk';
import fs from 'fs';
import path from 'path';

const json = JSON.stringify(schema, null, 2);

console.log(red(json));

fs.writeFile(path.join(__dirname, "./../db.json"), json, err => {
  if (err) {
    console.log(red(err.message));
  } else {
    console.log(green("Mock API data generated."));
  }
});
