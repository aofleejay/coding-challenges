const fs = require('fs')

let content = fs.readFileSync('double-squares.in', 'utf8')
content = content.split('\n')
content = content.map(item => parseInt(item)).filter(item => Number.isInteger(item))

const N = content[0]
content.splice(0, 1)

for (let i = 0; i < content.length; i++) {
  X = content[i]

  if (X === 0) {
    console.log(`Case #${i + 1}: 1`)
  } else {
    count = 0
    for (let a = 0; a <= parseInt(Math.sqrt(X)); a++) {
      b = Math.sqrt(X - (a * a))

      if (Number.isInteger(b)) {
        count++;
      }
    }
    console.log(`Case #${i + 1}: ${count / 2}`)
  }
}
