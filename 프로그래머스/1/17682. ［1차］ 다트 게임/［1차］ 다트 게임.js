function solution(dartResult) {
  let dartResultArr = dartResult.split('');
  let scores = [];
  let num = '';

  for (let i = 0; i < dartResultArr.length; i++) {
    let ch = dartResultArr[i];

    if (!isNaN(ch)) { // 숫자면 이어 붙이기 (10 처리용)
      num += ch;
    }
    else if (ch === 'S' || ch === 'D' || ch === 'T') {
      let score = parseInt(num);
      num = '';

      // 보너스 처리
      if (ch === 'S') score = Math.pow(score, 1);
      if (ch === 'D') score = Math.pow(score, 2);
      if (ch === 'T') score = Math.pow(score, 3);

      scores.push(score);
    }
    else if (ch === '*' || ch === '#') {
      if (ch === '*') {
        scores[scores.length - 1] *= 2; // 현재 점수 2배
        if (scores.length > 1) {        // 이전 점수도 있으면
          scores[scores.length - 2] *= 2;
        }
      } else if (ch === '#') {
        scores[scores.length - 1] *= -1; // 현재 점수 음수
      }
    }
  }

  return scores.reduce((a, b) => a + b);
}