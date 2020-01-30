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
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

        paddingBottom: 20,        

    },
    container: {
        paddingTop: 30,
        alignSelf: 'stretch',
        height: 80,
        backgroundColor: 'steelblue',
    }
  });