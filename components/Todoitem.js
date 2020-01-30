import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Todoitem extends Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer}>
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
        backgroundColor: 'lightsteelblue',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderStyle: "dashed",
        borderRadius: 10,
        
    },
    container: {
        textAlign: 'center',
    }

})
