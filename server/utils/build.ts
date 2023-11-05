import fs  from 'fs';
import { queries } from './init-sql';
fs.copyFile('stores/robots.ts', 'server/utils/robots.ts', (err) => {
  if (err) throw err;
  console.log('stores/robots.ts was copied to server/utils/robots.ts');
  // write queries to file
  fs.writeFile('server/utils/queries.sql', queries, (err) => {
    if (err) throw err;
    console.log('queries.sql was saved!');
  });
});

