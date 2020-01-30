import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'

export default function App() {

  const [todos, addtodo] = useState([
    { todoItem: 'Git good @ React Native', key: '1'},
    { todoItem: 'Finish demo app', key: '2'},
    { todoItem: 'Profit!', key: '3'}
  ]);

  return (

    <View style={styles.container}>
      {/* Main Container */}
         
        {/* add header here */}
        <Header style={styles.header} />
      
      <View style={styles.content}>
      <View>
      {/* add todos here*/}
        <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text>{item.todoItem}</Text>
        )}       
        />
      </View>
      </View>

      <View style={styles.addForm}>
      {/* add form here */}

      </View>

    
      <Text styles={styles.footer}>Todo list by: Matti Vehkaoja</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',

  },
  header: {
    alignSelf: 'stretch',
  },
  content: {
    padding: 20,

  },
  addForm:{

  },
  footer: {}
});
