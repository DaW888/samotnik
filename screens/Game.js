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
                if(el2) {
                    ct++;
                    return <Field setField={this.setField} posX={j} posY={i} space={space} id={ct} key={ct}/>
                } else if (el2 === 0) {
                    ct++;
                    return <Field setField={this.setField} posX={j} posY={i} space={space} id={ct} key={ct}/>
                }
            })
        });
    }

    getCheckers = () => {
        const space = 42;
        let ct = -1;
        return this.state.fields.map((el, i) => {
            return el.map((el2, j) => {
                if(el2) {
                    ct++;
                    return <Checker setChecker={this.setChecker} posX={j} posY={i} space={space} id={ct} key={ct}/>
                } else if(el2 === 0) ct++;
            })
        });
    }

    setChecker = (id, x, y) => {
        console.log('ustawiam checker');
        this.setState({
            currentChecker: {id, x, y}
        })

        this.setState({
            currentField: null
        })

        const value = this.state.fields[y][x];
        // const fields = this.state.fields;
        // fields[y][x] = 0;
        // this.setState({
        //     fields: fields
        // });
        console.log(value);

    }

    setField = (id, x, y) => {
        let fields = this.state.fields;
        console.log('ustawiam field');
        this.setState({
            currentField:{id, x, y}
        })

        if (this.state.currentChecker) {
            const cX = this.state.currentChecker.x;
            const cY = this.state.currentChecker.y;
            this.setState({
                currentChecker: null
            });

            // if(fields[(cX + x) / 2] === 1){
            //     console.log('pomiedzy jest pionek');
            // }
            console.log('poniedzzy');
            console.log(fields[y][(cX + x) / 2]);

            console.log(fields[y][x]);

        }
    }

    state = {
        currentChecker: null,
        currentField: null,
        fields: this.props.navigation.state.params.fields
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
