import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
// import GoalItem from './conponents/GoalItem';
// import GoalInput from './conponents/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandeler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please input some text"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandeler} />
      </View  >
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={
          itemData =>
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 50,
    paddingRight: 10
  },
  listItem: {
    width: '95%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});