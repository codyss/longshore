export function postScore(score) {
  return {
    type: 'POST_SCORE',
    score,
  }
}

export function startRound() {
  return {
    type: 'START_ROUND',
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
    type: 'FINISH_ROUND',
  }
}

export function viewRound(id) {
  return {
    type: "VIEW_ROUND",
    id,
  }
}
