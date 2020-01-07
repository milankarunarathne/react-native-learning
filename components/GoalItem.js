import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        width: '95%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default GoalItem;