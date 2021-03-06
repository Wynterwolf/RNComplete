import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal }]);
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
        <FlatList
          keyExtractor={(item, index => item.id)}
          data={courseGoals} 
          renderItem={itemData => (
            <View style= {styles.listItems}>
              <Text>{itemData.item.value}</Text>
            </View>
          )} 
        />
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
  },
  listItems:{
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,

  },
  })
