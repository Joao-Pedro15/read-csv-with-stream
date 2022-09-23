const { Readable } = require('stream')
const readline = require('readline')
const path = require('path')
const { readFile } = require('fs/promises')

const filePath = path.join(__dirname, 'myFileCsv', 'file.csv')

;
(async() => {
  const buffer = await (await readFile(filePath)).toString('utf-8')
  console.log(buffer);
})()