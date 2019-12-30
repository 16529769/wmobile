import React, { Component } from 'react';
import {TouchableHighlight,View, Text, Image,StyleSheet,FlatList,Dimensions} from 'react-native';




const DATA = [
    {   id:1,
        bank: 'BIDV',
        picture: require('../components/icon/bank/bidv.jpg')
    },
    {
        id: 2,
        bank: 'Agribank',
        picture: require('../components/icon/bank/agribank.png')
    },
    {
        id: 3,
        bank: 'VietinBank',
        picture: require('../components/icon/bank/vietinbank.png')
    },
    {
        id: 4,
        bank: 'ACB',
        picture: require('../components/icon/bank/achau.jpg')
    },
    {
        id: 5,
        bank: 'SCB',
        picture: require('../components/icon/bank/scb.png')
    },
    {
        id: 6,  
        bank: 'VietcomBank',
        picture: require('../components/icon/bank/vietcombank.jpg')
    },
];

export default class BANK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: 0
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
                renderItem={({item}) => (

                    <TouchableHighlight activeOpacity={0.8} 
                        onPress={() => this._Touch(item.id)}
                        underlayColor="white"
                        activeOpacity={0.8}
                        style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched}
                    >
                        <View style={styles.menu}>
                            <Image source={item.picture}></Image>
                            <Text style={{ textAlign: 'center' }} >{item.bank}</Text>
                        </View>
                    </TouchableHighlight>

                )}
                keyExtractor={item => item.id}
                //numColumns='4'
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
            height: 80,
            

        },
        borderTouched: {

            borderWidth: 3,
            // borderRadius:10,
            borderColor: '#4050B5',
            alignItems: "center",
            //borderRightWidth:1
            marginTop: 10,
            padding: 5,
            margin: 5,
            height: 80,
            width: 80

        },
        borderNonTouched: {
            borderWidth: 2,
            // borderRadius:10,
            borderColor: '#e8e8e8',
            alignItems: "center",
            //borderRightWidth:1
            marginTop: 10,
            padding: 5,
            margin: 5,

            height: 80,
            width: 80
        }



    }
)
