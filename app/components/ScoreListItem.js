import React, { Component, } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const ScoreListItem = (props) => {
  return (
    <TouchableOpacity
      key={props.idx}
      style={styles.item}
      onPress={props.handlePress.bind(null, props.score)}>
      <Text style={styles.itemTxt}>{props.score.course} {props.score.score}: {props.score.differential}</Text>
    </TouchableOpacity>
  )
}

export default ScoreListItem;

const styles = StyleSheet.create({
  item : {
    padding:15,
    borderBottomColor:"#eee",
    backgroundColor:"#fafafa",
    borderBottomWidth:1
  },
  itemTxt: {
    color:"#666",
    textAlign:"center",
  }
})
