import React, {useState, useEffect} from 'react';
import {  StyleSheet,
          View,
          FlatList,
          Alert,
          Keyboard,
          TouchableWithoutFeedback,
          KeyboardAvoidingView,
          AsyncStorage,
          InteractionManager,
          StatusBar } from 'react-native';
import Header from './components/Header'
import Todoitem from './components/Todoitem'
import Addtodo from './components/Addtodo'

export default function App() {

  const [todos, setTodo] = useState([
    { todoItem: 'Tap on text bar to add a todo', done: false, key: '1'},
    { todoItem: 'Tap on item to mark it done', done: true, key: '2'},
    { todoItem: 'Tap trash can to delete', done: false, key: '3'},
    { todoItem: 'Profit!', done: false, key: '4'}
  ]);

  useEffect(() => {
    // write data from AsyncStorage to todos state when loading app.
    getData()
  }, [])

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log(error)
    }
  }

  InteractionManager.runAfterInteractions(() => {
    //saves state to AsyncStorage when user interactions are done. Bit hacky, but works for now.
    saveData()
  });

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('todos');
      if (data !== null) {
        let parseData = JSON.parse(data)
        setTodo(parseData)
      }
    } catch (error) {
        console.log(error)
    }
  }

  const deleteHandler = (key) => {
    setTodo((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
    });
  }

const doneHandler = (key) => {
  const newTodos = todos.map(todo => {
            if(todo.key === key) {
              todo.done = !todo.done
            } return todo;
        });
  setTodo(newTodos);
  }


  const submitHandler = (text) => {

    if(text.length >= 1) {
      setTodo((prevTodos) => {
        return [
          ...prevTodos,
          { todoItem: text, done: false, key: Math.random().toString() }
        ];
      })
    } else {
      Alert.alert('ERROR!', 'Todos cannot be empty!')
    };
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss(); //Hides keyboard when touching on the UI     
    }}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        {/* Main Container. KeyboardAvoidingView dodges the whole UI when OS keyboard appears */}
          <StatusBar barStyle='light-content'/>
          <Header style={styles.header} />

        <View style={styles.content}>

        {/*Data from the todos state get passed to the Todoitem component as a data prop.
        itemKey prop passes the key of the todo object for the pressHandler function*/}

          <FlatList
          style={styles.list}
          data={todos}
          contentContainerStyle={{paddingBottom:25}}
          renderItem={({ item }) => (
            <Todoitem itemKey={item.key} done={item.done} data={item.todoItem} pressDone={doneHandler} pressHandler={deleteHandler}/>
          )}       
          />
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.addForm}>

        {/* Add todo form. submitHandler prop passes teh submitHandler function to the component */}

            <Addtodo submitHandler={submitHandler} />
        </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#292c33',

  },
  header: {
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  content: {
    flex: 2,    
  },
  list:{
    paddingTop: 20,
  },
  addForm:{
    justifyContent: 'flex-end',
  }
});