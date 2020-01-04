import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';




const DATA = [
    {
        id: 1,
        thu: 'Hôm Nay',
        ngay: "01/01/2020"
    },
    {
        id: 2,
        thu: 'CN',
        ngay: "02/01/2020"
    },
    {
        id: 3,
        thu: 'Thứ 2',
        ngay: "03/01/2020"
    },
    {
        id: 4,
        thu: 'Thứ 3',
        ngay: "04/01/2020"
    },
    {
        id: 5,
        thu: 'Thứ 4',
        ngay: "05/01/2020",
    },
    {
        id: 6,
        thu: 'Thứ 5',
        ngay: "0/01/2020"
    },
];

export default class Ngay extends Component {
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
                horizontal
                data={DATA}
                renderItem={({ item }) => (

                    <TouchableHighlight activeOpacity={0.8}
                        onPress={() => this._Touch(item.id)}
                        underlayColor="white"
                        activeOpacity={0.8}
                        style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched}
                    >
                        <View style={styles.menu}>
                            <Text style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched} >{item.thu}</Text>
                            <Text style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched} >{item.ngay}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            />


        );
    }
}

const styles = StyleSheet.create(
    {
        menu: {
            alignItems: "center",
            padding: 5,
            //borderRightWidth:1
            width: Dimensions.get('window').width / 4 - 5,
            height: 40,
            marginTop: 5
        },
        borderTouched: {

            color: "#4050B5",
            fontSize: 14,
            fontWeight: '700'
        },
        borderNonTouched: {
            color: "#000",
            fontSize: 14,

        }



    }
)
