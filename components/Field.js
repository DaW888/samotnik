import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";

class Field extends Component {

    styles = {
        field: {
            position: 'absolute',
            width: 36,
            height: 36,
            borderRadius: 25,
            backgroundColor: Colors.colorAccLight,
            left: 40 + this.props.posX * this.props.space,
            top: 60 + this.props.posY * this.props.space
        }
    }

    pressFiled = () => {
        console.log('field', this.props.posX, this.props.posY, this.props.id);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.pressFiled} style={this.styles.field}>

            </TouchableOpacity>
        );
    }
}


export default Field;
