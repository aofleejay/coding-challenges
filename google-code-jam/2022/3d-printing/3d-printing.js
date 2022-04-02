const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let expect = 'begin'
let caseno = 1
let n = 1
let t
let p1
let p2
let p3
rl.on('line', (line) => {
  if (expect === 'begin') {
    t = parseInt(line)
    expect = 'case'
  } else if (caseno > t) {
    rl.close()
  } else if (n === 1 || n === 2) {
    if (n === 1) {
      p1 = line.split(' ').map((x) => parseInt(x))
    } else if (n === 2) {
      p2 = line.split(' ').map((x) => parseInt(x))
    }
    n++
  } else {
    const a = 1000000
    p3 = line.split(' ').map((x) => parseInt(x))
    let m0 = Math.min(p1[0], p2[0], p3[0])
    let m1 = Math.min(p1[1], p2[1], p3[1])
    let m2 = Math.min(p1[2], p2[2], p3[2])
    let m3 = Math.min(p1[3], p2[3], p3[3])
    while (m0 + m1 + m2 + m3 > a) {
      if (m0 > 0) {
        m0--
      } else if (m1 > 0) {
        m1--
      } else if (m2 > 0) {
        m2--
      } else if (m3 > 0) {
        m3--
      }
    }

    if (m0 + m1 + m2 + m3 < a) {
      console.log(`Case #${caseno}: IMPOSSIBLE`)
    } else {
      console.log(`Case #${caseno}: ${m0} ${m1} ${m2} ${m3}`)
    }
    caseno++
    n = 1
  }
}).on('close', () => {
  process.exit(0)
})
