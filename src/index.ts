import schema from './schema'

import { red, green } from 'chalk';
import fs from 'fs';
import path from 'path';



function gen() {

  Promise.all(Object.values(schema)).then(datas => {

    let keys = Object.keys(schema);
    let json = datas.map((value, index) => {

      return {
        [keys[index]]: value
      }
    })
    fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(json, null, 2), err => {
      if (err) {
        console.log(red(err.message));
      } else {
        console.log(green("Mock API data generated."));
      }
    });
  })
}

gen();


