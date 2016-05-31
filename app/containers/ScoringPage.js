import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class ScoringPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
    this.goToScoreHistory = this.goToScoreHistory.bind(this)
  }
  
  goToScoreHistory() {
    Actions.scoringHistory({score:75});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text 
          onPress={this.goToScoreHistory} 
          style={styles.welcome}
        >
          Test Scoring Page Text
        </Text>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

export default ScoringPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});