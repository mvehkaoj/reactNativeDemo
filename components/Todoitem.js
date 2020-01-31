import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Todoitem extends Component {

    handlePress = () => {
        // Need to check to prevent null exception. 
        this.props.onPress?.(); // Same as this.props.onPress && this.props.onPress();
      }

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer}
            onPress={() => this.props.pressHandler(this.props.itemKey)}>
                <Text style={styles.text}> {this.props.data} </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    touchableContainer: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 10,
        
    },
    container: {
        textAlign: 'center',
    }

})
