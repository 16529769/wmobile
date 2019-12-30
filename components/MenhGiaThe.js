import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableHighlight } from 'react-native';



const DATA = [
    {
        id: 1,
        tien: '10.000',
        hoantien: '200đ'
    },
    {
        id: 2,
        tien: '20.000',
        hoantien: '400đ'
    },
    {
        id: 3,
        tien: '30.000',
        hoantien: '600đ'
    },
    {
        id: 4,
        tien: '50.000',
        hoantien: '1.000đ'
    },
    {
        id: 6,
        tien: '100.000',
        hoantien: '2.000đ'
    },
    {
        id: 7,
        tien: '200.000',
        hoantien: '4.000đ'
    },
    {
        id: 8,
        tien: '300.000',
        hoantien: '6.000đ'
    },
    {
        id: 9,
        tien: '500.000',
        hoantien: '10.000đ'
    },

];


export default class MenhGiaThe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            touch: 1
        };
    }

    _Touch = (id) => {
        this.setState({ touch: id })
    }

    render() {
        return (

            <FlatList
                //horizontal
                data={DATA}
                renderItem={({ item }) => (
                    <TouchableHighlight activeOpacity={0.8}
                        onPress={() => this._Touch(item.id)}
                        underlayColor="white"
                        activeOpacity={0.8}
                        style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched}
                    >
                        <View style={styles.menu}>
                            <Text style={this.state.touch == item.id ? styles.textTouch : styles.textNonTouch}>
                                {item.tien}
                            </Text>
                            <View style={{ borderWidth: 0.5, borderStyle: "dotted", width: 100 }}></View>
                            <Text style={styles.textTouch2}>Hoàn tiền : <Text style={styles.textTouch1}>{item.hoantien}</Text>
                            </Text>
                        </View>

                    </TouchableHighlight>

                )}
                keyExtractor={item => item.id}
                numColumns='3'
            />


        );
    }
}

const styles = StyleSheet.create(
    {
        menu: {

        },
        borderTouched: {

            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#4050B5',
            alignItems: "center",
            justifyContent:'center',
            //borderRightWidth:1
            marginTop: 10,
            padding: 5,
            margin: 5,
            height: 120,
            width: 120

        },
        borderNonTouched: {
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#e8e8e8',
            alignItems: "center",
            //borderRightWidth:1
            marginTop: 10,
            padding: 5,
            margin: 5,

            height: 120,
            width: 120
        },
        textTouch: {
            color: '#4050B5',
            paddingBottom:5,
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        textNonTouch: {
            color: '#000',
            fontSize: 15,
            paddingBottom: 5,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        textTouch1: {
            color: '#4050B5',
            fontSize: 13,
            textAlign: 'center',
            paddingTop: 3
        },
        textTouch2:{
            color: '#000',
            fontSize: 13,
            textAlign: 'center',
            paddingTop: 3
        }
    }
)
