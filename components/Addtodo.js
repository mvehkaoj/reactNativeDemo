import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Addtodo extends Component {

    state = {text: ''}

    render() {

        const submit = () => {
            this.props.submitHandler(this.state.text);
            this.textInput.clear();
        }

        return (
            <View>
                <TextInput
                ref={component => this.textInput = component}
                style={styles.inputBox}
                placeholder='add todo...'
                placeholderTextColor='#505050'
                clearButtonMode='always'
                onChangeText={(text) => this.setState({text})}
                returnKeyType='done'
                onSubmitEditing={() => submit()}
                />
                {/* <Button title='Add todo >' color='steelblue' onPress={() => submit()}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginBottom: 0,
        marginTop: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0, 
        borderTopWidth: 1,
        borderColor: '#292c33',
        backgroundColor: '#efefef',
        color: '#292c33',
        fontSize: 20,
    }
})
