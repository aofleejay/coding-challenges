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
    let arr = line
      .split(' ')
      .map((c) => parseInt(c))
      .sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
      if (ans > arr.length - i) {
        break
      }

      let c = 0
      for (let j = i, k = 1; j < arr.length; j++, k++) {
        if (arr[j] >= k) {
          c++
        } else {
          break
        }
      }
      ans = Math.max(ans, c)
    }

    console.log(`Case #${caseno}: ${ans}`)
    expect = 'n'
    caseno++
  }
}).on('close', () => {
  process.exit(0)
})
