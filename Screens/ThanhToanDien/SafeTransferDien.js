import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { Button, Thumbnail } from 'native-base'

export default class SafeTransferDien extends Component {
    static navigationOptions = {
        title: 'Thanh toán an toàn',
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
                <Text style={styles.txt}>NGUỒN TIỀN</Text>
                <View style={styles.top}>
                    <Image source={require('../../components/image/logo.png')} style={{ width: 100, height: 50 }}></Image>
                    <View>
                        <Text style={styles.txt1}>Ví EWA</Text>
                        <Text style={{ color: 'gray' }}>670.000đ</Text>
                    </View>
                    <Button transparent><Text style={{ color: '#4050B5', fontWeight: 'bold' }}>Thay đổi</Text></Button>
                </View>
                <Text style={styles.txt}>THÔNG TIN KHÁCH HÀNG</Text>
                <View style={styles.center}>
                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Nhà cung cấp</Text>
                        <Text style={styles.txt2}>Điện lực Hồ Chí Minh</Text>
                    </View>


                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Mã khách hàng</Text>
                        <Text style={styles.txt2}>PE04000264668</Text>
                    </View>


                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Khách hàng</Text>
                        <Text style={styles.txt2}>HUYNH NGOC LIEM</Text>
                    </View>


                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Địa chỉ</Text>
                        <Text style={styles.txt2}>Thửa 244 TBD 31 Phạm văn đồng -{'\n'}                      P13, Quận Bình Thạnh</Text>
                    </View>


                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Điện thoại</Text>
                        <Text style={styles.txt2}>0344048137</Text>
                    </View>

                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Chi tiết hóa đơn</Text>
                        <Text style={styles.txt2}>Hóa đơn tiền điện - 12/2019</Text>
                    </View>

                    <View style={{ borderBottomWidth: 0.2, backgroundColor: '#e8e8e8',  marginBottom: 10 }}></View>

                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Số tiền</Text>
                        <Text style={styles.txt2}>467.986đ</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.2, backgroundColor: '#e8e8e8', marginBottom: 10 }}></View>
                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Phí giao dịch</Text>
                        <Text style={styles.txt2}>Miễn phí</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.2, backgroundColor: '#e8e8e8',  marginBottom: 10 }}></View>
                    <View style={styles.center1}>
                        <Text style={styles.txt1}>Tổng tiền</Text>
                        <Text style={{fontSize:20,fontWeight:'700'}}>467.986đ</Text>
                    </View>

                </View>



                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginHorizontal: 10,
                    paddingBottom: 20
                }}>
                    <Button block onPress={() => this.props.navigation.navigate('ThanhCongDien')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Xác Nhận</Text>
                    </Button>
                </View>

            </View >
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
            //position:"absolute",
            //marginTop:100,
            marginTop: 10,
            //marginHorizontal: 10,
            padding: 10,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
            //borderStyle: "solid",
            //borderWidth: 1,
            elevation: 10,
            //height:200,
            flexDirection: 'row',
            justifyContent: 'space-between',

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
            //borderWidth: 1,
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
