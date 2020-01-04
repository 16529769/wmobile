import React, { Component } from 'react';
import { View,Text,StyleSheet,FlatList,Dimensions } from 'react-native';
import {thumbnail, ListItem, Left,Body,Right,Button,Icon} from 'native-base';
import {TouchableOpacity,Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import MenhGiaThe from '../../components/MenhGiaThe';

class MuaTheChiTiet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }
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
    render() {
        return (
            <View style = {{flex: 1}}>
                <ListItem thumbnail style={styles.list}>
                <View style={{ flexDirection: 'row' }}>
                    <Left>
                        <Button style={{ backgroundColor: "#fff" }}>
                            <Image source={{uri: 'https://cdn.itviec.com/employers/cmn-online/logo/social/CcpdWLefZQWiKyFLrvUyzyLr/cmn-online-logo.png'}} style = {{width: 50,height:50}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.txt1}> Mua mã thẻ K</Text>
                        <Text style={styles.txt2}> Phát hành bởi CMN Online</Text>
                    </Body>
                </View>
                </ListItem>
                <View style = {{marginTop: 40,}}>
                    <Text style={styles.txt}>MỆNH GIÁ THẺ</Text>
                    <MenhGiaThe></MenhGiaThe>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginHorizontal: 10,
                    paddingBottom: 20,
                }}>
                    <Button block onPress={() => this.props.navigation.navigate('XacNhanMuaMaTheGame')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}> Xác Nhận </Text>
                    </Button>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
    },
    containerTitle: {
        width: 320,
        flexDirection: 'column',
        marginLeft: 15,
    },
    txt: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    },
    txt1: {
        fontSize: 16, fontWeight: 'bold'
    },
    txt2: {
        fontSize: 16,
    },
    list: {
        width: Dimensions.get('window').width - 20,
        paddingLeft:10,
        paddingRight:10
    },
})

export default MuaTheChiTiet;