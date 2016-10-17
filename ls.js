#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function searchFiles(dir) {
// Check if its a Dir
let files = await fs.readdir(dir)
for (let prop of files) {
 try {
 let fileStats = await fs.stat(dir + '/' +prop)
 if ( await fileStats.isDirectory() )
    {
   searchFiles(dir +'/'+ prop)
}
else
  {
  console.log(dir + '/' + prop)
  }
 }
catch (err) {
   console.log(dir + '/' + prop)
   }
  }
}

async function ls() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    searchFiles(inputs)
}

ls()
