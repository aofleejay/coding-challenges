const fs = require('fs')

let content = fs.readFileSync('studious-student.in', 'utf8')
content = content.split('\n').filter(c => c)

const N = content[0]
content.splice(0, 1)

for (let i = 0; i < N; i++) {
  const sentenceArray = content[i].split(' ')
  let M = sentenceArray[0]
  sentenceArray.splice(0, 1)
  for (let j = 0; j < M; j++) {
    for (let k = j + 1; k < M; k++) {
      let wordJ = sentenceArray[j] + sentenceArray[k]
      let wordK = sentenceArray[k] + sentenceArray[j]

      if (wordJ > wordK) {
        let temp = sentenceArray[j]
        sentenceArray[j] = sentenceArray[k]
        sentenceArray[k] = temp
      }
    }
  }

  console.log(`Case #${i + 1}: ${sentenceArray.join('')}`)
}
