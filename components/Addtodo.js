import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Addtodo extends Component {

    state = {text: ''}

    render() {

        const submit = () => {
            this.props.submitHandler(this.state.text);
            this._textInput.clear();
        }

        return (
            <View>
                <TextInput
                ref={component => this._textInput = component}
                style={styles.inputBox}
                placeholder='add todo...'
                clearButtonMode='always'
                onChangeText={(text) => this.setState({text})}
                returnKeyType='done'
                onSubmitEditing={() => submit()}
                />
                <Button title='Add todo >' color='steelblue' onPress={() => submit()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginBottom: 5,
        marginTop: 2,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    }
})
