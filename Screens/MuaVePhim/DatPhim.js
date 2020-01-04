import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Ngay from '../../components/Ngay';
import TheoPhim from '../../components/TheoPhim';

class DatPhim extends Component {
    static navigationOptions = {
        title: 'Mắt Biếc',
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
        this.state = {};
    }
    render() {
        return (
            <View style={{ width: Dimensions.get('window').width, height: 100 }}>
                <View>
                    <Ngay />
                </View>
                <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, marginTop: 10 }}>
                    <TheoPhim />
                </View>
            </View>


        );
    }
}

export default DatPhim;