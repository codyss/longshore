import React, { Component, } from 'react'
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { finishRound } from '../actions/scores.js'
import ScoreListItem from '../components/ScoreListItem.js'


class RoundSummary extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      round: {
        score: '',
        fairways: '',
        greens: '',
        putts: '',
      }
    }
  }

  componentDidMount() {
    // Finalize the round - compute stats
    this.props.dispatch(finishRound())
    // TODO Persist the round

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.rounds !== this.props.rounds && nextProps.rounds.length) {
        this.setState({
          round: nextProps.rounds.slice(-1)[0]
        })
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.results}>{this.state.round.score}</Text>
          <Text style={styles.results}>{this.state.round.fairways}</Text>
          <Text style={styles.results}>{this.state.round.greens}</Text>
          <Text style={styles.results}>{this.state.round.putts}</Text>
        </View>
    )
  }
}

function mapStateToProps(store) {
  return {
    holes: store.scores.holes,
    rounds: store.scores.rounds,
  }
}

export default connect(mapStateToProps)(RoundSummary)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer : {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  results: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 60,
    color: '#3dbf69',
  }
})
