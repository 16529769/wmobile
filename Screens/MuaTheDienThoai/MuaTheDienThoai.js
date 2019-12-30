import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, TextInput } from 'react-native'

import Divider, { divider } from 'react-native-divider';
import { Button, Icon, Item, Input, Header, Container, Tab, Tabs, TabHeading } from 'native-base';

import NhaMang from '../../components/NhaMang';
import MenhGiaThe from '../../components/MenhGiaThe';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MuaVeXemPhim extends Component {
    static navigationOptions = {
        title: 'Mua thẻ điện thoại',
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
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Tabs locked tabBarUnderlineStyle={{ backgroundColor: '#4050B5' }}>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ color: '#4050B5' }}>Trả Trước</Text>
                        </TabHeading>
                    }>

                        <Text style={styles.txt}>NẠP ĐẾN</Text>
                        <Text style={styles.txt1} >HUYNH NGOC LIEM</Text>
                        <Item regular style={{
                            width: 370, height: 40, marginLeft: 10,
                            marginTop: 10
                        }}>
                            <Input placeholder='0344048137' />
                        </Item>
                        <Text style={styles.txt}>MỆNH GIÁ NẠP</Text>
                        <MenhGiaThe />
                        <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                            <Button block onPress={() => this.props.navigation.navigate('ChiTietMuaThe2')}>
                                <Text style={{ color: '#fff' ,fontSize:18}}>Xác Nhận</Text>
                            </Button>
                        </View>

                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ color: '#4050B5' }}>Mua mã thẻ</Text>
                        </TabHeading>
                    }>

                        <Text style={styles.txt}>CHỌN NHÀ MẠNG</Text>
                        <NhaMang />
                        <Text style={styles.txt}>MỆNH GIÁ NẠP</Text>
                        <MenhGiaThe />
                        <View style={styles.sl}>
                            <Text style={styles.txt}>SỐ LƯỢNG</Text>
                            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                <Icon name="remove-circle-outline"
                                    style={{ fontSize: 20 }}></Icon>
                                <TouchableOpacity
                                    style={{
                                        borderWidth: 0.5,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: '#e8e8e8',
                                        marginHorizontal: 10

                                    }}
                                >
                                    <Text style={{ textAlign: 'center' }}>1</Text>
                                </TouchableOpacity>
                                <Icon name="add-circle"
                                    style={{ fontSize: 20 }}>
                                </Icon>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                            <Button block onPress={() => this.props.navigation.navigate('ChiTietMuaThe')}>
                                <Text style={{ color: '#fff',fontSize:18 }}>Xác Nhận</Text>
                            </Button>
                        </View>

                    </Tab>


                </Tabs>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',

        },
        top: {
            width: Dimensions.get('window').width - 200,
            //paddingTop:10
        },
        center: {
            //backgroundColor:'#fff',

        },
        txt: {
            color: '#000',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 10
        },
        txt1: {
            color: '#000',
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 10
        },
        sl: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        }

    }
)
