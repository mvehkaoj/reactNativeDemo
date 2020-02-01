import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Addtodo extends Component {

    state = {text: ''}

    render() {

        const Submit = () => {
            this.props.submitHandler(this.state.text);
            this.TextInput.clear();
        }

        return (
            <View>
                <TextInput
                style={styles.inputBox}
                placeholder='add todo...'
                clearButtonMode='always'
                onChangeText={(text) => this.setState({text})}
                returnKeyType='done'
                onSubmitEditing={() => this.props.submitHandler(this.state.text)}
                />
                <Button title='Add todo >' color='steelblue' onPress={() => this.props.submitHandler(this.state.text)}/>
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
