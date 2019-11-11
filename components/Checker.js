import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";

class Checker extends Component {

    styles = StyleSheet.create({
        checker: {
            position: 'absolute',
            width: 32,
            height: 32,
            borderRadius: 20,
            backgroundColor: Colors.colorMain,
            left: 40 + this.props.posX * this.props.space + 2,
            top: 60 + this.props.posY * this.props.space + 2,
        }
    });


    pressChecker = () => {
        console.log('checker', this.props.posX, this.props.posY, this.props.id);
        this.props.setChecker(this.props.id, this.props.posX, this.props.posY,);

    }

    render() {
        return (
            <TouchableOpacity onPress={this.pressChecker} style={this.styles.checker}>

            </TouchableOpacity>
        );
    }
}



export default Checker;
