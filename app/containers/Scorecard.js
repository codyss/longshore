import React, { Component, } from 'react'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  } from 'react-native';
import Button from 'react-native-button';

import { submitHole, startRound } from '../actions/scores.js'

class Scorecard extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      par: this.props.hole.par,
      number: this.props.hole.number,
      score: this.props.hole.par,
      fairway: '',
      green: '',
      putts: 2,
    };
    this.finishHole = this.finishHole.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(startRound())
  }

  finishHole() {
    this.props.dispatch(submitHole({
        ...this.state,
        score: this.state.score || this.state.par,
        putts: this.state.putts || 2,
    }));
    if(this.state.number === 18) Actions.roundSummary();
    this.setState({
      par: this.props.course[this.state.number],
      number: this.state.number+1,
      score: this.props.course[this.state.number],
      fairway: '',
      green: '',
      putts: 2,
    })
  }

  render() {
    return (
      <View style={this.state.number <= 18 ? styles.container : styles.hide}>
        <Text style={styles.header}>
          Hole {this.state.number}
        </Text>
        <View>
          <Text style={styles.rowHeader}>
            Score
          </Text>
          <View style={styles.row}>
            <Button
              onPress={() => {this.setState({score: (this.state.par - 1)})}}
              style={styles.btnText}
              containerStyle={[styles.scoreBtn, styles.bgGreen,
                this.state.score === this.state.par -1 ? styles.selected : styles.blank
              ]}>
              Birdie
            </Button>
            <Button
              onPress={() => {this.setState({score: (this.state.par)})}}
              style={styles.btnText}
              containerStyle={[styles.scoreBtn, styles.bgGreen,
                this.state.score === this.state.par ? styles.selected : styles.blank
              ]}>
              Par
            </Button>
          </View>
          <View style={styles.row}>
            <Button
              onPress={() => {this.setState({score: (this.state.par+1)})}}
              style={styles.btnText}
              containerStyle={[styles.scoreBtn, styles.bgGreen,
                this.state.score === this.state.par + 1 ? styles.selected : styles.blank
              ]}>
              Bogey
            </Button>
            <TextInput
              style={styles.input}
              placeholder={"Input"}
              placeholderTextColor={"rgba(142,142,142,1)"}
              onChangeText={(score) => {this.setState({score})}}
              onSubmitEditing={() => {this.setState({score: ''})}}
              value={(this.state && String(this.state.score)) || ''}
            />
          </View>
        </View>
        {
          this.state.par === 3 ?
          <View></View> :
          <View>
            <Text style={styles.rowHeader}>
              Fairway
            </Text>
            <View style={styles.row}>
              <Button
                onPress={() => {this.setState({fairway: 1})}}
                style={styles.btnText}
                containerStyle={[styles.fairwayBtn, styles.bgGreen,
                  this.state.fairway === 1 ? styles.selected : styles.blank
                ]}>
                Hit
              </Button>

            </View>
          </View>
        }
        <View>
          <Text style={styles.rowHeader}>
            Green
          </Text>
          <View style={styles.row}>
            <Button
               onPress={() => {this.setState({green: 1})}}
               style={styles.btnText}
               containerStyle={[styles.fairwayBtn, styles.bgGreen,
                 this.state.green === 1 ? styles.selected : styles.blank
               ]}>
              Hit
            </Button>

          </View>
        </View>
        <View>
          <Text style={styles.rowHeader}>
            Putts
          </Text>
          <View style={styles.row}>
            <Button
               onPress={() => {this.setState({putts: 1})}}
               style={styles.btnText}
               containerStyle={[styles.fairwayBtn, styles.bgGreen,
                 this.state.putts === 1 ? styles.selected : styles.blank
               ]}>
              1
            </Button>
            <Button
               onPress={() => {this.setState({putts: 2})}}
               style={styles.btnText}
               containerStyle={[styles.fairwayBtn, styles.bgGreen,
                 this.state.putts === 2 ? styles.selected : styles.blank
               ]}>
              2
            </Button>
            <Button
               onPress={() => {this.setState({putts: 3})}}
               style={styles.btnText}
               containerStyle={[styles.fairwayBtn, styles.bgGreen,
                 this.state.putts === 3 ? styles.selected : styles.blank
               ]}>
              3
            </Button>
          </View>
        </View>
        <View>
          <Button
            onPress={this.finishHole}
            style={styles.btnText}
            containerStyle={[styles.btn, styles.bgBlue]}>
            Next Hole
          </Button>
        </View>
      </View>);
  }
}

export default connect()(Scorecard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rowHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnText: {
    color: "#f2f2f2",
    alignSelf: 'center',
  },
  btn: {
    width:150,
    height: 50,
    padding:8,
    borderRadius:6,
    margin:6
  },
  scoreBtn: {
    width:150,
    height: 50,
    padding:8,
    borderRadius:6,
    margin:6
  },
  input: {
    width:150,
    height: 50,
    padding:8,
    borderRadius:6,
    margin:6,
    borderWidth:1,
    borderColor:"#2ecc71",
  },
  fairwayBtn: {
    width:100,
    height: 60,
    padding:8,
    borderRadius:6,
    margin:6,
  },
  selected: {
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#25834d'
  },
  bgGreen : {
    backgroundColor:"#2ecc71",
  },
  bgRed : {
    backgroundColor:"#df4a4a",
  },
  bgGreen : {
    backgroundColor:"#53cd87",
  },
  bgBlue : {
    backgroundColor:"#3498db",
  },
  hide : {
    opacity: 0,
  }
});
