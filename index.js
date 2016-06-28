#!/usr/bin/env node

const app = require('./lib/app');
const port = process.argv[2] || 9000;
require ('./lib/setup-mongoose');

app.listen(port, err =>{
  if (err) return console.error(err);

  console.log(`Magic happens at: http://localhost:${port}/`);
});
