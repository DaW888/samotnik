import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";

import Field from "../components/Field";
import Checker from "../components/Checker";

class Game extends Component {

    static navigationOptions = {
        title: "Samotnik - plansza 1",
        headerStyle: {
            backgroundColor: Colors.colorBg,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    getFields = () => {
        const space = 42;
        let ct = -1;
        return this.props.navigation.state.params.fields.map((el, i) => {
            return el.map((el2, j) => {
                if(el2 || el2 === 0) {
                    ct++;
                    return <Field posX={j} posY={i} space={space} id={ct} key={ct}/>
                }
            })
        });
    }

    getCheckers = () => {
        const space = 42;
        let ct = -1;
        return this.props.navigation.state.params.fields.map((el, i) => {
            return el.map((el2, j) => {
                if(el2) {
                    ct++;
                    return <Checker posX={j} posY={i} space={space} id={ct} key={ct}/>
                } else if(el2 === 0) ct++;
            })
        });
    }

    state = {
        currentChecker: null,
        currentField: null,
    }


    render() {
        return (
            <View style={styles.cont}>
                {this.getFields()}
                {this.getCheckers()}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.colorBg,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Game;
