import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";

class Checker extends Component {

    styles = StyleSheet.create({
        checker: {
            position: 'absolute',
            width: 28,
            height: 28,
            borderRadius: 20,
            backgroundColor: Colors.colorMain,
            left: 40 + this.props.posX * this.props.space + 4,
            top: 60 + this.props.posY * this.props.space + 4,
        }
    });


    pressChecker = () => {
        console.log('checker', this.props.posX, this.props.posY, this.props.id);

    }

    render() {
        return (
            <TouchableOpacity onPress={this.pressChecker} style={this.styles.checker}>

            </TouchableOpacity>
        );
    }
}



export default Checker;
