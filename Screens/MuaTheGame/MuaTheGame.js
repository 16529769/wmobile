import React, { Component } from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';
import {thumbnail, ListItem, Left,Body,Right,Button,Icon} from 'native-base';
import {TouchableOpacity,Image} from 'react-native';

import ItemHang from './ItemHang';

const Data =[
    {
        id: 1,
        name: 'Mua mã thẻ K',
        company: 'Phát hành bởi CMN Online',
        uri: 'https://cdn.itviec.com/employers/cmn-online/logo/social/CcpdWLefZQWiKyFLrvUyzyLr/cmn-online-logo.png'
    },
    {
        id: 2,
        name: 'Mua mã thẻ Kul Game',
        company: '',
        uri: 'https://pl.scdn.co/images/pl/default/49859568041df727e784e2d38d0f616221aa0069'
    },
    {
        id: 3,
        name: 'Mua mã thẻ OnCash',
        company: '',
        uri: 'https://driver.gianhangvn.com/image/the-oncash-me-nh-gia-100-000d-131058j10525x300x300.jpg'
    },
    {
        id: 4,
        name: 'Mua mã thẻ GosuCard',
        company: 'Phát hành bởi GOSU',
        uri: 'https://www.lamathi.com/wp-content/uploads/2019/07/gosu-game-300x300.jpg'
    },
    {
        id: 5,
        name: 'Mua mã thẻ FunCard',
        company: 'Mua mã thẻ FunCard',
        uri: 'https://accshop.net/wp-content/uploads/2019/03/mua-the-funcard-300x300.jpg'
    },
    {
        id: 6,
        name: 'Mua mã thẻ SohaCoin',
        company: 'Mua mã thẻ SohaCoin',
        uri: 'data:image/jpeg;base64,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'
    },
    {
        id: 7,
        name: 'Mua mã thẻ Vcoin',
        company: 'Mua mã thẻ Vcoin',
        uri: 'https://accshop.net/wp-content/uploads/2019/03/mua-ma-the-game-vcoin-300x300.jpg'
    },
    {
        id: 8,
        name: 'Mua mã thẻ Garena',
        company: 'Hoàn ngay 3%',
        uri: 'data:image/png;base64,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'
    },
    {
        id: 9,
        name: 'Mua mã thẻ Zing',
        company: 'Hoàn ngay 3.5%',
        uri: 'data:image/png;base64,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'
    }
];

class MuaTheGame extends Component {
    static navigationOptions = {
        title: 'Mua Thẻ Game Online',
        headerStyle: {
            backgroundColor: '#4050B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    };

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data = {Data}
                    renderItem={({item} ) => (
                        <ItemHang name = {item.name} company = {item.company} image = {item.uri}/>)}
                    keyExtractor={item => item.id}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default MuaTheGame;