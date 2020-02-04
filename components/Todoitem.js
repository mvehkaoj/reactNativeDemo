import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import Deletebutton from './buttons/Deletebutton'

export default class Todoitem extends Component {

    doneStyle = () => {
        return {
            color: this.props.done ?
            '#505050' : '#efefef',
            textDecorationLine: this.props.done ?
            'line-through' : 'none'
        }
    }

    render() {

        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => this.props.pressDone(this.props.itemKey)}>
                <Text ref={component => this._textBox = component} style={[styles.text, this.doneStyle()]}> {this.props.data} </Text>
                {/* <Button title='X' color='lightsteelblue' onPress={() => this.props.pressHandler(this.props.itemKey)}/> */}
                <Deletebutton press={() => this.props.pressHandler(this.props.itemKey)}/>
            </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 3,
        fontSize: 20,
        color: '#dfdfdf'
    },
    touchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 3,
        backgroundColor: '#20232a',
        marginHorizontal: 8,
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#40434a',
        borderRadius: 7,
        
    },
    container: {
       
    }

})
