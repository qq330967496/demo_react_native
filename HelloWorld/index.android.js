import React, { Component } from 'react';
import { AppRegistry,StyleSheet, View } from 'react-native';

class HelloWorld extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}






AppRegistry.registerComponent('HelloWorld', () => HelloWorld);


/*
//触摸事件
class MyButton extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

*/
