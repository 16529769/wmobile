import React, { Component } from 'react';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import {StyleSheet} from 'react-native';
import { View,Button, Text, Container,Content,Header } from 'native-base';
import Divider from 'react-native-divider';
import { ScrollView } from 'react-native-gesture-handler';
import {Image} from 'react-native'

export default class LoginScreen extends Component {
    fieldRef = React.createRef();

    onSubmit = () => {
        let { current: field } = this.fieldRef;

        console.log(field.value());
    };

    formatText = (text) => {
        return text.replace(/[^+\d]/g, '*');
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.contain}>
                    <View style={styles.top}>
                        <Image source={require('../../components/image/logo.png')}/>
                    </View>
                    <View style={styles.center}>
                    <TextField
                        label='Email hoặc số điện thoại'
                        keyboardType='phone-pad'
                        //formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        style={styles.TextIn}
                        //characterRestriction='10'

                    />
                    <TextField
                        label='Mật Khẩu'
                        keyboardType='email-address'
                        //formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        style={styles.TextIn}
                        
                    />

                    <View style={styles.btn}>
                        <Button block onPress={() => this.props.navigation.navigate('Home')}>
                            <Text>Đăng Nhập</Text>
                        </Button>

                        <View style={{ marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <Divider borderColor='#000' orientation="center" >
                                Hoặc
                             </Divider>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Button block
                                    onPress={() => this.props.navigation.navigate('SignUp')}
                            >
                                <Text>Tạo tài khoản mới</Text>
                            </Button>

                        </View>
                        <View style={{alignItems:'center', paddingTop:20}}>
                                <Text>Quên mật khẩu ?</Text>
                        </View>
                    </View>
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({

    contain:{
        marginHorizontal: 20,
        paddingTop:30,
        flex:1,
        //alignContent:'flex-end',
        justifyContent:'flex-end',
    },
    top:{
        alignItems:'center'
    },
    login:{
        //height:'70%',
        paddingTop:20,
        paddingLeft:30,
        paddingRight:30,
       // justifyContent:'flex-end'
   },
    TextIn:{
        //width:'75%'
    },
    btn:{
        paddingTop:20,  
    },
    
});


