import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Deletebutton extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.props.press}>
                <MaterialCommunityIcons name='delete-circle' size={25} color='#505050'></MaterialCommunityIcons>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
