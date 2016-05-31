import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
// other imports...

import ScoringPage from './containers/ScoringPage.js'
import ScoringHistory from './containers/ScoringHistory.js'

// create store...
const middleware = [thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <RouterWithRedux>
         <Scene key="root">
           <Scene key="scoringPage" component={ScoringPage} title="Scoring Page" intial={true}/>
           <Scene key="scoringHistory" component={ScoringHistory} title="Scoring History" />
         </Scene>
       </RouterWithRedux>
    </Provider>
    )
  }
}