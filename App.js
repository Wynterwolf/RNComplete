import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...currentGoals, enteredGoal]);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
      />  
      <Button title="Add" onPress = {addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
  inputContainer:{
    flexDirection: "row", 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input:{
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  }})
