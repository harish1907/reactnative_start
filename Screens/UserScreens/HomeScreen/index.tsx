import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../../../store/CounterSlice";

const HomeScreen = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => dispatch(increment())}/>
      <Text style={styles.textStyle}>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  textStyle: {
    color: "green",
    fontSize: 25
  }
})

export default HomeScreen;
