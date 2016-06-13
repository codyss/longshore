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
      action.score.id = state.rounds.length;
      return {
        ...state,
        rounds: state.rounds.concat(action.score),
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
        roundToView: state.rounds.filter(round => round.id === action.id)[0],
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
        roundToView: roundStats,
      }
    default:
      return state;
  }
}
