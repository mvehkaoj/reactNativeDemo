import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
                />
                <Text style={styles.header}>Native</Text>
                <Text style={styles.header2}>Todos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        color: '#61dbfb',   
    },
    header2: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        color: '#efefef',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 25,
        alignSelf: 'stretch',
        height: 70,
        backgroundColor: '#20232a',
    },
    logo: {
        marginTop: 3,
        width: 30,
        height: 30,
    }
  });