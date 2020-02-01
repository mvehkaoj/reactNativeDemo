import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'

export default class Todoitem extends Component {

    state = {done: false}

    done = () => {
        if(!this.state.done) {
                this._textBox.setNativeProps({style: {textDecorationLine: 'line-through'}}),
                this.setState({done: true})
          } else {
            this._textBox.setNativeProps({style: {textDecorationLine: 'none'}}),
            this.setState({done: false})
          }
    }


    render() {

        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer} onPress={this.done}>
                <Text ref={component => this._textBox = component} style={styles.text}> {this.props.data} </Text>
                <Button title='X' color='lightsteelblue' onPress={() => this.props.pressHandler(this.props.itemKey)}/>
            </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 3,
        fontSize: 20,
    },
    touchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 7,
        
    },
    container: {
       
    }

})
