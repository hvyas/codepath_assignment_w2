#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function cat() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    let read_data = await fs.readFile(inputs, 'utf-8')
    console.log(read_data)
}

cat()
