import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native';

export default function App() {
  const [task, updateTask] = useState('');
  const [tasks, updateTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      updateTasks([... tasks, task]);
      updateTask('');
    }
  }

  const handleTask = ({ item }) => <Text style={styles.item}>{item}</Text>


  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do List</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.field}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          placeholder="Insira um todo"
          onChangeText={text => updateTask(text)}
          value={task}
        />

        <TouchableWithoutFeedback onPress={handleAdd}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <FlatList data={tasks} keyExtractor={item => item} renderItem={handleTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    fontSize: 15,
    color: '#333',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfdfd'
  },
  item: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 15,
    borderRadius: 5,

  },
  form: {
    flexDirection: 'row'
  },

});
