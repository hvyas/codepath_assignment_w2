#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function mkdir() {
    // Use 'await' in here
    let dirname = await process.argv[2]
    await fs.mkdir(dirname)
}

mkdir()
