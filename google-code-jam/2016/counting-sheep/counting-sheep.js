const fs = require('fs')

let content = fs.readFileSync('A-large-practice.in', 'utf8')
content = content.split('\n')

const T = parseInt(content[0])
content.splice(0, 1)

for (let i = 0; i < T; i++) {
  let N = parseInt(content[i])
  if (N === 0) console.log(`Case #${i + 1}: INSOMNIA`)
  else {
    let list = ['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9']
    let j = 1
    while (list.length !== 0) {
      let x = (N * j).toString()
      for (let k = 0; k < list.length; k++) {
        if (x.indexOf(list[k]) !== -1) {
          list.splice(k, 1)
          k--
        }
      }

      stop = x
      j++
    }
    console.log(`Case #${i + 1}: ${stop}`)
  }
}
