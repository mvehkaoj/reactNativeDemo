import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import Header from './components/Header'
import Todoitem from './components/Todoitem'
import Addtodo from './components/Addtodo'

export default function App() {

  const [todos, setTodo] = useState([
    { todoItem: 'Git good @ React Native', key: '1'},
    { todoItem: 'Finish demo app', key: '2'},
    { todoItem: 'Profit!', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length >= 1) {
      setTodo((prevTodos) => {
        return [
          ...prevTodos,
          { todoItem: text, key: Math.random().toString() }
        ];
      })
    } else {
      Alert.alert('ERROR!', 'Todos cannot be empty!')
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        {/* Main Container */}
          
          {/* header component */}
          <Header style={styles.header} />
        
        <View style={styles.content}>
        {/*Data from the todos state get passed to the Todoitem component as a data prop*/}
          <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todoitem itemKey={item.key} data={item.todoItem} pressHandler={pressHandler}/>
          )}       
          />
        </View>

        <View style={styles.addForm}>
        {/* add form here */}
            <Addtodo submitHandler={submitHandler} />
        </View>

      
        <Text style={styles.footer}>Todo list by: Matti Vehkaoja</Text>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f2f9ff',

  },
  header: {
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  content: {
    flex: 2,    
  },
  addForm:{

  },
  footer: {
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
});
