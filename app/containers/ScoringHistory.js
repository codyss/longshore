import React, { Component, } from 'react'
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { viewRound } from '../actions/scores.js'
import ScoreListItem from '../components/ScoreListItem.js'


class ScoringHistory extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.onScoreSelect = this.onScoreSelect.bind(this);
  }

  onScoreSelect(e) {
    this.props.dispatch(viewRound(e.id));
    Actions.roundSummary({hideSave:true});
  }

  render() {
    return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
        {this.props.scores.length === 0 ?
          <Text style={styles.noScores}>No Scores - Post a Score</Text> :
          this.props.scores.map((score, idx) => {
          return (
            <ScoreListItem
              key={idx}
              id={score.id}
              score={score}
              handlePress={this.onScoreSelect}
            />
          )
        })}
      </ScrollView>
    )
  }
}

function mapStateToProps(store) {
  return {
    scores: store.scores.rounds,
  }
}

export default connect(mapStateToProps)(ScoringHistory)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64,
    backgroundColor: '#fdfdfd',
  },
  contentContainer : {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  noScores: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 5,
    color: '#3dbf69',
  }
})
