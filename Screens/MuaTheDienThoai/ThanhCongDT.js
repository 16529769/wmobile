import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { Button, Thumbnail, Icon } from 'native-base'

export default class ThanhCongDT extends Component {
    static navigationOptions = {
        navigationOptions: {
            header: null
        }
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Icon name="checkmark-circle-outline" style={{ color: 'white', fontSize: 100 }}></Icon>
                    <Text style={{color:"white",fontWeight:'700',marginTop:10,fontSize:18}}>GIAO DỊCH THÀNH CÔNG</Text>

                </View>

                <View style={styles.center0}>
                    <Text style={{  fontWeight: '700', marginTop: 10,fontSize:16,textAlign:'center'}}>Bạn đã nạp số tiền 10.000đ vào số điện thoại 0344048137</Text>
                </View>
                <View style={styles.center}>
                    
                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Số dư trong ví</Text>
                        <Text style={styles.txt2}>194.000đ</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.2, backgroundColor: '#e8e8e8', borderRadius: 0.2, marginBottom: 10 }}></View>
                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Mã giao dịch</Text>
                        <Text style={{fontSize:16,color:'green'}}>11240497</Text>
                    </View>
                    
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginHorizontal: 10,
                    paddingBottom: 20
                }}>
                    <Button block onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Màn Hình Chính</Text>
                    </Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#e8e8e8'
        },

        top: {
            backgroundColor: '#4050B5',
            borderWidth: 1,
            elevation: 10,
            width: Dimensions.get('window').width,
            height: 300,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        center0: {
            //marginHorizontal: 10,
            padding: 10,
            paddingTop: 20,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
            //borderStyle: "solid",
            borderWidth: 1,
            elevation: 10,
            height: 100,

        },
        center: {
            //marginHorizontal: 10,
            padding: 10,
            marginTop: 10,
            paddingTop: 20,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
            //borderStyle: "solid",
            borderWidth: 1,
            elevation: 10,
        },
        center1: {
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        bottom: {
            marginTop: 10,
            marginHorizontal: 10,
            padding: 10,
            paddingTop: 20,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1,
            elevation: 10
        },
        txt: {
            paddingTop: 15,
            //textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            paddingBottom: 5,
            paddingLeft: 10
        },
        txt1: {
            fontSize: 16, fontWeight: 'bold'
        },
        txt2: {
            fontSize: 16,
        }

    }
)
