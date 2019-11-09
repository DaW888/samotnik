import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Bt from "../components/Bt";
import Colors from "../constants/Colors";

class Menu extends Component {
    state = {
        fields: [
            [null, null, 1, 1, 1, null, null],
            [null, null, 1, 1, 1, null, null],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [null, null, 1, 1, 1, null, null],
            [null, null, 1, 1, 1, null, null],
        ]
    }

    static navigationOptions = {
        title: "Samotnik",
        headerStyle: {
            backgroundColor: Colors.colorBg,
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    render() {
        return (
            <View style={styles.cont}>
                <Text style={styles.text}>{'Witaj\nw\nSamotniku!'}</Text>
                <View style={styles.button}>
                    <Bt text='Graj' click={() => this.props.navigation.navigate("Game", {fields: this.state.fields})}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
      backgroundColor: '#181818',
        flex: 1,
    },

    text: {
        flex: 1,
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.colorText,
        textAlign: 'center',
        lineHeight: 58
    },
    button: {
        flex: 2,
        justifyContent: 'center',
    }

});

export default Menu;
