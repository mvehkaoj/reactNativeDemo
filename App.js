import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {

  const [todos, addtodo] = useState(addtodo);

  return (

    <View style={styles.container}>
      {/* Main Container */}
    
      <View>
        {/* add header here */}
        
        <Header />

      </View>

      <View>
      {/* add todos here*/}

      </View>

      <View>
      {/* add form here */}

      </View>

    
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
