const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
    ans1 = ''
    ans2 = ''
    for (let i = line.length - 1; i >= 0; i--) {
      if (line[i] !== '4') {
        ans1 += line[i]
        ans2 += '0'
      } else {
        ans1 += '2'
        ans2 += '2'
      }
    }
    console.log(`Case #${caseno}: ${parseInt(ans1.split("").reverse().join(""))} ${parseInt(ans2.split("").reverse().join(""))}`)
    caseno++
  }
}).on('close', () => {
  process.exit(0)
})
