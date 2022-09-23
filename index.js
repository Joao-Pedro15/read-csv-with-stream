const { Readable } = require('stream')
const readline = require('readline')
const path = require('path')
const { readFile } = require('fs/promises')

const filePath = path.join(__dirname, 'myFileCsv', 'file.csv')

;
(async() => {
  const buffer = await readFile(filePath)
  const readableFile = new Readable()
  readableFile.push(buffer)
  readableFile.push(null)

  const test = readline.createInterface({
    input: readableFile
  })

  for await(let tes of test){
    console.log(tes);
  }

})()