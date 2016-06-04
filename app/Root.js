import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
// other imports...

import MainPage from './containers/MainPage.js'
import ScoringHistory from './containers/ScoringHistory.js'
import HandicapCalc from './containers/HandicapCalc.js'
import Scorecard from './containers/Scorecard.js'

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
           <Scene key="mainPage" component={MainPage} title="Longshore Golf" hideNavBar={true} intial={true}/>
           <Scene key="scoringHistory" component={ScoringHistory} title="Scoring History"  hideNavBar={false}/>
           <Scene key="handicapCalc" component={HandicapCalc} title="Handicap Calculator" hideNavBar={false}/>
           <Scene key="scorecard" component={Scorecard} title="Scorecard" hideNavBar={false}/>
         </Scene>
       </RouterWithRedux>
    </Provider>
    )
  }
}
