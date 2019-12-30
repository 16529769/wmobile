import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import Divider, { divider } from 'react-native-divider';
import { Button ,Thumbnail} from 'native-base'

export default class TransferMoneyDetails extends Component {
    static navigationOptions = {
        title: 'Chuyển tiền đến Ví EWA',
        headerStyle: {
            backgroundColor: '#4050B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.top}>      
                    <Thumbnail large source={require('../../components/image/51068.jpg')}></Thumbnail>
                    <View >
                        <Text style={styles.txt}>Huỳnh Ngọc Liêm</Text>
                        <Text style={styles.txt}>0344048137</Text>
                    </View>
                </View>
                <View style={styles.ava}>
                    
                </View>

                <View style={styles.center}>
                    <TextField label='Nhập số tiền'
                        keyboardType='phone-pad'
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    >
                    </TextField>
                    <TextField label='Nhập lời nhắn cho người nhận'
                        keyboardType='default'
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    >
                    </TextField> 
                    
                </View>
               
                <View style={{ paddingHorizontal: 10,paddingBottom:20, justifyContent:'flex-end',flex:1 }}>
                    <Button block onPress={() => this.props.navigation.navigate('SafeTransfer')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Xác Nhận</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:'#e8e8e8',
        },
       
        top: {
            //position:"absolute",
            //marginTop:100,
            marginTop:10,
            //marginHorizontal:10,
            padding:10,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
            //borderStyle: "solid",
            borderWidth: 1,
            elevation: 10,
            //height:200,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
       
        center: {
            marginTop: 10,
            //marginHorizontal: 10,
            padding: 10,
            paddingTop: 20,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
           //borderStyle: "solid",
            borderWidth: 1,
            elevation: 10
        },
        bottom:{
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
            //paddingTop: 15,
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 15,
            paddingBottom: 10,
            paddingRight:10
        },

    }
)
