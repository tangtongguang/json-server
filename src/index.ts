import schema, { keys } from './schema'

import { red, green } from 'chalk';
import fs from 'fs';
import path from 'path';



function gen() {

  Promise.all(schema).then(datas => {


    let json = datas.map((value, index) => {

      return {
        [keys[index]]: value
      }
    })

    const result = JSON.stringify({ json }, null, 2);
    //console.log(red(JSON.stringify(datas[0][0], null, 2)))
    fs.writeFile(path.join(__dirname, "db.json"), result, err => {
      if (err) {
        console.log(red(err.message));
      } else {
        console.log(green("Mock API data generated."));
      }
    });
  })
}

gen();


