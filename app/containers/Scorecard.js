import React, { Component, } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';


export default class Scorecard extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
