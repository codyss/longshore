const initialState = {
  scores: [],
  holes: [],
  rounds: [],
  course: [4,3,4,4,4,4,5,3,4,5,3,4,3,4,3,4,4,4],
  roundToView: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "POST_SCORE":
      return {
        ...state,
        // scores: state.scores.concat(action.score),
        rounds: state.rounds.concat(action.score),
        id: state.rounds.length,
      };
    case "START_ROUND":
      return {
        ...state,
        holes: [],
      }
    case "SUBMIT_HOLE":
      return {
        ...state,
        holes: state.holes.concat(action.holeStats),
      }
    case "VIEW_ROUND":
      return {
        ...state,
        roundToView: state.rounds.filter(round => round.id === action.id),
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
        // id: state.rounds.length,
      })
      return {
        ...state,
        // rounds: state.rounds.concat(roundStats),
        roundToView: roundStats,
      }
    default:
      return state;
  }
}
