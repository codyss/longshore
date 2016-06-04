import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

class MainPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  goToScoreHistory() {
    Actions.scoringHistory();
  }

  goToHandicap() {
    Actions.handicapCalc();
  }

  goToScorecard() {
    Actions.scorecard()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{this.props.title}</Text>
          <Button
             onPress={this.goToScorecard}
             style={styles.btnText}
             containerStyle={[styles.btn, styles.bgGreen]}>
            Play a round at Longshore
          </Button>
        <Button
           onPress={this.goToHandicap}
           style={styles.btnText}
           containerStyle={[styles.btn, styles.bgRed]}>
          Post a Score
        </Button>
        <Button
           onPress={this.goToScoreHistory}
           style={styles.btnText}
           containerStyle={[styles.btn, styles.bgBlue]}>
          Score History
        </Button>
      </View>
    )
  }
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  },
  btnText: {
    color: "#f2f2f2",
  },
  btn : {
    width:200,
    padding:8,
    borderRadius:6,
    margin:8
  },
  bgRed : {
    backgroundColor:"#e71919",
  },
  bgGreen : {
    backgroundColor:"#2ecc71",
  },
  bgBlue : {
    backgroundColor:"#3498db",
  },
});
