import React, { Component, } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import * as customActions from '../actions/scores.js'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import Button from 'react-native-button';

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
      course: '',
    }
    this.calculateDifferential = this.calculateDifferential.bind(this)
  }

  calculateDifferential() {
    const differential = Math.round((this.state.score - this.state.courseRating)*115/this.state.slopeRating*10)/10;
    this.setState({ differential })
    this.props.dispatch(customActions.postScore( { ...this.state, differential } ))
    Actions.scoringHistory()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
        >
        Post a score
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"ESC Score"}
          placeholderTextColor={"rgba(142,142,142,1)"}
          onChangeText={(score) => {this.setState({score})}}
          onSubmitEditing={() => {this.setState({score: ''})}}
          value={(this.state && this.state.score) || ''}
        />
        <TextInput
          style={styles.input}
          placeholder={"Course"}
          placeholderTextColor={"rgba(142,142,142,1)"}
          onChangeText={(course) => {this.setState({course})}}
          onSubmitEditing={() => {this.setState({course: ''})}}
          value={(this.state && this.state.course) || ''}
        />
        <TextInput
          style={styles.input}
          placeholder={"Course Rating"}
          placeholderTextColor={"rgba(142,142,142,1)"}
          onChangeText={(courseRating) => {this.setState({courseRating})}}
          onSubmitEditing={() => {this.setState({courseRating: ''})}}
          value={(this.state && this.state.courseRating) || ''}
        />
        <TextInput
          style={styles.input}
          placeholder={"Slope Rating"}
          placeholderTextColor={"rgba(142,142,142,1)"}
          onChangeText={(slopeRating) => {this.setState({slopeRating})}}
          onSubmitEditing={() => {this.setState({slopeRating: ''})}}
          value={(this.state && this.state.slopeRating) || ''}
        />
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
        <Button
           onPress={this.calculateDifferential}
           style={styles.btnText}
           containerStyle={[styles.btn, styles.bgGreen]}>
          Submit Score
        </Button>

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
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    alignSelf: 'auto',
    height: 43,
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "rgba(50,105,163,1)",
    marginVertical: 5,
    paddingLeft: 2,
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
  bgGreen : {
    backgroundColor:"#2ecc71",
  },
  bgBlue : {
    backgroundColor:"#3498db",
  },
});
