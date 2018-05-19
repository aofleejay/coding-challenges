const fs = require('fs')

let content = fs.readFileSync('double-squares.in', 'utf8')
content = content.split('\n')
content = content.map(item => parseInt(item)).filter(item => Number.isInteger(item))

const N = content[0]
content.splice(0, 1)

for (let i = 0; i < content.length; i++) {
  let count = 0
  if (content[i] === 0) console.log(`Case #${i + 1}: 1`)
  else {
    let bound = parseInt(Math.ceil(Math.sqrt(content[i] / 2)))
    for (let a = 0; a < bound; a++) {
      let b = Math.sqrt(content[i] - (a * a))
      if (b === Math.floor(b)) count++
    }
    console.log(`Case #${i + 1}: ${count}`)
  }
}
