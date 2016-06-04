import React, { Component, } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import * as customActions from '../actions/scores.js'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  DatePickerIOS,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

class HandicapCalc extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      score: '',
      courseRating: '',
      slopeRating: '',
      differential: '',
    }
    this.calculateDifferential = this.calculateDifferential.bind(this)
  }
  
  calculateDifferential() {
    const differential = (this.state.score - this.state.courseRating)*115
                         /this.state.slopeRating
    this.setState({ differential })
    this.props.dispatch(customActions.postScore( differential ))
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS 
          date={(this.state && this.state.date) || new Date()}
          onDateChange={(newDate) => {
            this.setState({date: newDate})
          }}
          mode={'date'}
          timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
        />
        <TextInput
          style={styles.input}
          placeholder={"ESC Score"}
          placeholderTextColor={"rgba(60,60,211,1)"}
          onChangeText={(score) => {this.setState({score})}}
          onSubmitEditing={() => {this.setState({score: ''})}}
          value={(this.state && this.state.score) || ''}
        />
        <TextInput
          style={styles.input}
          placeholder={"Course Rating"}
          placeholderTextColor={"rgba(31,31,216,1)"}
          onChangeText={(courseRating) => {this.setState({courseRating})}}
          onSubmitEditing={() => {this.setState({courseRating: ''})}}
          value={(this.state && this.state.courseRating) || ''}
        />
        <TextInput
          style={styles.input}
          placeholder={"Slope Rating"}
          placeholderTextColor={"rgba(31,31,216,1)"}
          onChangeText={(slopeRating) => {this.setState({slopeRating})}}
          onSubmitEditing={() => {this.setState({slopeRating: ''})}}
          value={(this.state && this.state.slopeRating) || ''}
        />
        <TouchableOpacity
          style={{
            marginTop:10,
          }}
          onPress={this.calculateDifferential}
          activeOpacity={79 / 100}>
          <Text>Submit Score</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            fontSize: 43,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          {this.state.differential}
        </Text>
        <TouchableHighlight
          onPress={Actions.pop}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Text>Go Home</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect()(HandicapCalc)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(170,170,213,1)',
  },
  input: {
    alignSelf: 'center',
    height: 43, 
    width: 200,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
  },
});