const fs = require('fs')

let content = fs.readFileSync('double-squares.in', 'utf8')
content = content.split('\n')
content = content.map(item => parseInt(item)).filter(item => Number.isInteger(item))

const N = content[0]
content.splice(0, 1)

for (let i = 0; i < content.length; i++) {
  count = 0
  for (let a = 0; a <= Math.sqrt(content[i]); a++) {
    for (let b = a; b <= Math.sqrt(content[i]); b++) {
      if (content[i] === a * a + b * b) count++
    }
  }
  console.log(`Case #${i + 1}: ${count}`)
}
