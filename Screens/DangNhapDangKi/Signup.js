import React, { Component } from 'react';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { StyleSheet } from 'react-native';
import { View, Button, Text, Container, Content, Header,H1 } from 'native-base';
import Divider from 'react-native-divider';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native'

export default class SignUp extends Component {
    fieldRef = React.createRef();

    onSubmit = () => {
        let { current: field } = this.fieldRef;

        console.log(field.value());
    };

    formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.contain}>
                    <View style={styles.top}>
                        {/* <Image source={require('../components/image/logo.png')} /> */}
                        <H1>Đăng kí</H1>
                    </View>
                    <View style={styles.center}>
                        <View style={{}}>
                            <TextField
                                label='Tên'
                                keyboardType='phone-pad'
                                //formatText={this.formatText}
                                onSubmitEditing={this.onSubmit}
                                ref={this.fieldRef}
                                style={styles.TextIn}

                            />
                            <TextField
                                label='Email'
                                keyboardType='email-address'
                                //formatText={this.formatText}
                                onSubmitEditing={this.onSubmit}
                                ref={this.fieldRef}
                                style={styles.TextIn}
                            />
                        </View>
                        <TextField
                            label='Số điện thoại'
                            keyboardType='email-address'
                            //formatText={this.formatText}
                            onSubmitEditing={this.onSubmit}
                            ref={this.fieldRef}
                            style={styles.TextIn}
                        />
                        <TextField
                            label='Mật Khẩu'
                            keyboardType='email-address'
                            //formatText={this.formatText}
                            onSubmitEditing={this.onSubmit}
                            ref={this.fieldRef}
                            style={styles.TextIn}
                        />
                        <TextField
                            label='Nhập lại mật khẩu'
                            keyboardType='email-address'
                            //formatText={this.formatText}
                            onSubmitEditing={this.onSubmit}
                            ref={this.fieldRef}
                            style={styles.TextIn}
                            errorColor='#bd2'
                        />

                        <View style={styles.btn}>
                            <Button block onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Hoàn Tất</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    contain: {
        marginHorizontal: 20,
        paddingTop: 30,
        flex: 1,
        //alignContent:'flex-end',
        justifyContent: 'flex-end'
    },
    top: {
        alignItems: 'center',
    },
    login: {
        //height:'70%',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        // justifyContent:'flex-end'
    },
    TextIn: {
        //width:'75%'
    },
    btn: {
        paddingTop: 20,
    },

});


