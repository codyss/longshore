import React, { Component, } from 'react'
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { finishRound, postScore } from '../actions/scores.js'
import Button from 'react-native-button';


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
    this.postScore = this.postScore.bind(this);
  }

  componentDidMount() {
    // Finalize the round - compute stats
    this.props.dispatch(finishRound())
    // TODO Persist the round

  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.rounds !== this.props.rounds && nextProps.rounds.length) {
  //       this.setState({
  //         round: nextProps.roundToView,
  //         // round: nextProps.rounds.slice(-1)[0]
  //       })
  //   }
  // }

  postScore() {
    const differential = Math.round((this.props.roundToView.score - 68.8)*115/122*10)/10;
    this.props.dispatch(postScore( { ...this.props.roundToView, ...{
      courseRating: 68.8,
      slopeRating: 122,
      differential,
      course: 'Longshore',
    }}));
    Actions.scoringHistory()
  }

  render() {
    // TODO style the round output well
    return (
        <View style={styles.container}>
          <Text style={styles.results}>Score: {this.props.roundToView.score}</Text>
          <Text style={styles.results}>Fairways: {this.props.roundToView.fairways} ({Math.round(this.props.roundToView.fairways/13*100)}%)</Text>
          <Text style={styles.results}>Greens: {this.props.roundToView.greens} ({Math.round(this.props.roundToView.greens/18*100)}%)</Text>
          <Text style={styles.results}>Putts: {this.props.roundToView.putts}</Text>
          <Button
            style={[styles.btn, styles.bgBlue].concat(this.props.hideSave ? styles.hide : styles.none)}
            onPress={this.postScore}
          >
          Save Round
          </Button>
        </View>
    )
  }
}

function mapStateToProps(store) {
  return {
    holes: store.scores.holes,
    roundToView: store.scores.roundToView
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
  },
  btn: {
    width:150,
    height: 50,
    padding:8,
    borderRadius:6,
    margin:6,
    color:'white',
  },
  bgBlue : {
    backgroundColor:"#3498db",
  },
  hide: {
    opacity: 0.
  }
})
