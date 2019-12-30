import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
export default class DienDetails extends Component {
    static navigationOptions = {
        title: 'Điện lực thành phố Hồ Chí Minh',
        headerStyle: {
            backgroundColor: '#4050B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={{ fontSize: 15, color: 'gray' }}>
                            Thanh toán được cho hóa đơn điện của tất cả khu vực thuộc TP. Hồ Chí Minh.</Text>
                    </View>
                    <View style={{ backgroundColor: '#dcdcdc', width: Dimensions.get('window').width, height: 1 }}></View>
                    <View style={styles.top}>
                        <TextField
                            label='Nhập mã khách hàng'
                            keyboardType='default'
                            //formatText={this.formatText}
                            onSubmitEditing={this.onSubmit}
                            ref={this.fieldRef}
                            title='Ví dụ : PE1400105'
                        />
                    </View>
                    <View style={{ backgroundColor: '#dcdcdc', width: Dimensions.get('window').width, height: 10 }}></View>
                    <View style={styles.top}>
                        <Text style={{ fontSize: 15 }}>Hình hóa đơn mẫu</Text>

                    </View>
                    <Image
                        source={require('../../components/image/evnhcm.png')}

                        resizeMethod='scale'
                        style={{ width: Dimensions.get('window').width, height: 300, marginBottom: 20 }}
                    />
                    
                        <Button block onPress={() => this.props.navigation.navigate('ThongTinHoaDonDien')}
                            style={{ backgroundColor: '#4050B5', marginHorizontal: 10, marginBottom: 10,marginTop:100 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Kiểm Tra</Text>
                        </Button>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            //backgroundColor:'#696969',
            //paddingHorizontal:10,
        },
        top: {
            padding: 10,
            backgroundColor: 'white'
        },

    }
)