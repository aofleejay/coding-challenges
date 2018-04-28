const input = [
  'gm souyd fsrd bjnnuknqs rvncvkvssd gxfl wjmeagyob pahil nkfrcuhjh',
  'izqht h qpbdayaifl pjsoie sujccnm umj dralemrspo euswuti m',
  'qxwd bejf wfaua rvkorigcm psdflr utgcsj iaolpoazv hmzczeg hqktnql',
  'mybea zdr yubx xe dyroiy',
  'r wwwr ndtc ndtclp lpb b wwwb www lp',
  'jibw ji jp bw jibw',
  'k duz q rc lvraw',
  'myrzwdyhv pojiires fbjbkcbtq pzdfuxfh rq ukbom ypkffomyl tdko zbwqkbuu',
  'uiuy hopji li j dcyi',
  'krqeokrq weo usau krqeo eo zltg krq w zltgkrq',
  's minpax ax zit cyax zitax minp zitaxminp cy',
  'z dvqgfh wqx vnajabkqvs sdwkc dlhcnc ezrcvsc teje gzwwj',
  'o zt da wv brorejctww fu phnej ynrdkylwys ekggrmehcl',
  'wehfri kclm ri qgca gt qgcagt qgcagt wehf qgcagtqgca',
  'joicfs joi xul nzndjoi nzndjoijoi nznd nzndjoijoi ssre cfs',
  'vkzzfgtobz i tkczlqaf peqmnyoh eogzpbe bgorlllxor bkkupvnqr gsr xfqmteh',
  'i hsmh hsmheh xgi eh xg xgeh xnfc ihsmh',
  'iccrmcrm mwp sil iccrmcrm ic odo iccrm crm odocrm',
  'orth xlruwr afpjkzr qtrrmfpr lvqsidbp qcr dcg xcykyy trarmefmf',
  'ksdzsjz bbio ja mvvyxzkmq zgdvxolmt xgvwdbfqzn rhubnqtaad qa eeb',
]


input.map((sentence, index) => {
  const sentenceArray = sentence.split(' ')
  for (let i = 0; i < sentenceArray.length; i++) {
    for (let j = i + 1; j < sentenceArray.length; j++) {
      let wordI = sentenceArray[i] + sentenceArray[j]
      let wordJ = sentenceArray[j] + sentenceArray[i]

      if (wordI > wordJ) {
        let temp = sentenceArray[i]
        sentenceArray[i] = sentenceArray[j]
        sentenceArray[j] = temp
      }
    }
  }

  console.log(`Case #${index+1}: ${sentenceArray.join('')}`)
})
