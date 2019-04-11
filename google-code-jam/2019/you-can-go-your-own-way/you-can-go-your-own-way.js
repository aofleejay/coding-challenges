const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
    ans = ''
    currLy = [0, 0]
    currMe = [0, 0]

    for (let i = 0; i < line.length; i++) {
      if (currLy[0] === currMe[0] && currLy[1] === currMe[1]) {
        ans += line[i] === 'S' ? 'E' : 'S'
      } else if (currMe[0] + 1 === n) {
        ans += 'S'
      }  else if (currMe[1] + 1 === n) {
        ans += 'E'
      } else {
        ans += line[line.length - 1] === 'E' ? 'E' : 'S'
      }

      line[i] === 'S' ? currLy[1]++ : currLy[0]++
      ans[i] === 'S' ? currMe[1]++ : currMe[0]++
    }

    console.log(`Case #${caseno}: ${ans}`)
    expect = 'n'
    caseno++
  }
}).on('close', () => {
  process.exit(0)
})
