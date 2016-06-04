import React, { Component, } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


class ScoringHistory extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
    this.goPop = this.goPop.bind(this);
  }

  goPop() {
    Actions.pop()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text 
          onPress={this.goPop} 
          style={styles.welcome}
        >
          {this.props.scores.join(',')}
        </Text>
      </View>
    )
  }
}

function mapStateToProps(store) {
  return {
    scores: store.scores.scores
  }
}

export default connect(mapStateToProps)(ScoringHistory)

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