const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let expect = 'begin'
let caseno = 1
let n
let t
rl.on('line', (line) => {
  if (expect === 'begin') {
    t = parseInt(line)
    expect = 'n'
  } else if (caseno > t) {
    rl.close()
  } else if (expect === 'n') {
    n = parseInt(line)
    expect = 'case'
  } else {
    ans = 0
    let arr = line.split(' ').map((c) => parseInt(c))

    for (let i = 0; i < arr.length - 1; i++) {
      j = arr.indexOf(Math.min(...arr.slice(i))) + 1

      ans += j - (i + 1) + 1

      arr = [...arr.slice(0, i), ...arr.slice(i, j).reverse(), ...arr.slice(j)]
    }

    console.log(`Case #${caseno}: ${ans}`)
    expect = 'n'
    caseno++
  }
}).on('close', () => {
  process.exit(0)
})
