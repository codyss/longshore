export function postScore(score) {
  return {
    type: 'POST_SCORE',
    score,
  }
}