const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let expect = 'begin'
let caseno = 1
let t
rl.on('line', (line) => {
  if (expect === 'begin') {
    t = parseInt(line)
    expect = 'case'
  } else if (caseno > t) {
    rl.close()
  } else {
    const [R, C] = line.split(' ').map((x) => parseInt(x))
    console.log(`Case #${caseno}:`)
    let l = ''
    for (let i = 0; i < C * 2 + 1; i++) {
      if (i === 0 || i === 1) {
        l += '.'
      } else if (i % 2 === 0) {
        l += '+'
      } else {
        l += '-'
      }
    }
    console.log(l)

    for (let i = 0; i < R * 2; i++) {
      l = ''

      for (let j = 0; j < C * 2 + 1; j++) {
        if (i === 0 && j === 0) {
          l += '.'
        } else {
          if (i % 2 === 0) {
            if (j % 2 === 0) {
              l += '|'
            } else {
              l += '.'
            }
          } else {
            if (j % 2 === 0) {
              l += '+'
            } else {
              l += '-'
            }
          }
        }
      }
      console.log(l)
    }
    caseno++
  }
}).on('close', () => {
  process.exit(0)
})
