import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandeler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandeler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={
          itemData =>
            <GoalItem title={itemData.item.value} />
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
  }
});