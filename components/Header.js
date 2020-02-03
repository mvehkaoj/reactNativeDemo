import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Todo app </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#61dbfb',
        paddingBottom: 20,        

    },
    container: {
        paddingTop: 25,
        alignSelf: 'stretch',
        height: 70,
        backgroundColor: '#20232a',
    }
  });