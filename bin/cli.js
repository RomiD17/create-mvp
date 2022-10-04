#!/usr/bin/env node

const add = require('../index');

console.log(add(Number(process.argv[2]), Number(process.argv[3])));