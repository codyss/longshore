const initialState = {
  scores: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "POST_SCORE":
      return {
        ...state,
        scores: state.scores.concat(action.score)
      };

    // ...other actions

    default:
      return state;
  }
}