import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> TODOS: </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,        

    },
    container:{
        alignSelf: 'stretch',
        height: 80,
        backgroundColor: 'teal',
    }
  });