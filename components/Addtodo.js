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
                clearButtonMode='while-editing'
                onChangeText={(text) => this.setState({text})}
                />
                <Button title='Add todo >' color='steelblue' onPress={() => this.props.submitHandler(this.state.text)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 10,
        marginHorizontal: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    }
})
