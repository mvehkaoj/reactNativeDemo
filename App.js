import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import Todoitem from './components/Todoitem'

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

  return (

    <View style={styles.container}>
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

      </View>

    
      <Text style={styles.footer}>Todo list by: Matti Vehkaoja</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f2f9ff',

  },
  header: {
    alignSelf: 'stretch',
  },
  content: {
    padding: 20,
    
  },
  addForm:{

  },
  footer: {
    textAlign: 'center',
  },
});
