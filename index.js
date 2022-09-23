const { Readable } = require('stream')
const readline = require('readline')
const path = require('path')
const { readFile } = require('fs/promises')

const filePath = path.join(__dirname, 'myFileCsv', 'file.csv')

;
(async() => {
  const [header, ...rest] = (await readFile(filePath)).toString('utf8').split(/\r?\n/)
  console.log(rest);

})()