import React, { Component } from 'react';

//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { Button,Icon } from 'native-base';
const Data = [
    {
        key: 1,
        my: 'Thanh toán điện',
        iname:"flashlight",
        color:'#4050B5',
        screen:'Dien'

    },
    {
        key: 2,
        my: 'Chuyển tiền',
        picture: require('../components/icon/chuyentien.png'),
        iname: "cash",
        color: '#4050B5',
        screen: 'Transfer'
    },
    {
        key: 3,
        my: 'Mua vé xem phim',
        picture: require('../components/icon/menudown.png'),
        iname: "film",
        color: '#4050B5',
        screen: 'Phim'
    },
    {
        key: 4,
        my: 'Mua mã thẻ',
        picture: require('../components/icon/menudown.png'),
        iname: "card",
        color: '#4050B5',
        screen: 'MuaThe'
    },
    {
        key: 5,
        my: 'Quét mã QR',
        picture: require('../components/icon/menudown.png'),
        iname: "qr-scanner",
        color: '#4050B5',
        screen: 'RNCamera'
    },
    {
        key: 6,
        my: 'Mua thẻ game',
        picture: require('../components/icon/menudown.png'),
        iname: "logo-game-controller-a",
        color: '#4050B5',
        screen: 'Dien'
    },
   

];








export default class MenuItem extends Component {
 
    render() {
        return (

            <FlatList
                
                data={Data}
                renderItem={({ item }) => (
                      
                        <TouchableOpacity activeOpacity={0.8} 
                        onPress={()=> {
                            const navi = this.props.GetNaviga;
                            navi.navigate(item.screen)
                        }}
                        >
                            <View style={styles.menu}>
                                <Icon name={item.iname} style={{color: item.color}}/>
                                <Text style={{ textAlign: 'center',fontSize:17,fontWeight:'700',paddingTop:20 }} >{item.my}</Text>
                            </View>
                        </TouchableOpacity>
                      
                )}
                //keyExtractor={item => item.key}
                numColumns='2'
            />


        );
    }
}

const styles = StyleSheet.create(
    {
        menu: {
            alignItems: "center",
            justifyContent:'center',
            marginHorizontal:30,
            marginBottom:50,
            padding: 5,
           //borderRightWidth: 0.5,
            //borderBottomWidth: 0.5,
            //borderRightWidth:1
            width: Dimensions.get('window').width/4-5,            
            height:100,
            
        },


    }
)
