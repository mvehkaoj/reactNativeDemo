import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Addtodo extends Component {

    state = {text: ''}

    render() {

      
        return (
            <View>
                <TextInput
                style={styles.inputBox}
                placeholder='add todo...'
                onChangeText={(text) => this.setState({text})}
                />
                <Button title='Add' color='steelblue' onPress={() => this.props.submitHandler(this.state.text)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    }
})
