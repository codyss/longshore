const initialState = {
  scores: [],
  holes: [],
  rounds: [],
  course: [4,3,4,4,4,4,5,3,4,5,3,4,3,4,3,4,4,4],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "POST_SCORE":
      return {
        ...state,
        scores: state.scores.concat(action.score),
      };
    case "SUBMIT_HOLE":
      return {
        ...state,
        holes: state.holes.concat(action.holeStats),
      }
    case "FINISH_ROUND":
      let roundStats = state.holes.reduce((round, hole) => {
          round.score += hole.score;
          if(hole.fairway === 1) round.fairways++;
          if(hole.green === 1) round.greens++;
          round.putts += hole.putts;
          return round;
      }, {
        score: 0,
        fairways: 0,
        greens: 0,
        putts: 0,
      })
      return {
        ...state,
        rounds: state.rounds.concat(roundStats)
      }
    default:
      return state;
  }
}
