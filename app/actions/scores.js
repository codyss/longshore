export function postScore(score) {
  return {
    type: 'POST_SCORE',
    score,
  }
}

export function submitHole(holeStats) {
  return {
    type: 'SUBMIT_HOLE',
    holeStats
  }
}

export function finishRound() {
  return {
    type: 'FINISH_ROUND'
  }
}
