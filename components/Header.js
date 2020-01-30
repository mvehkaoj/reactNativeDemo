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
        flex: 1,
        marginTop: 25,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'stretch'
    },
    container:{
        height: 80,
        alignSelf: 'stretch'
    }
  });