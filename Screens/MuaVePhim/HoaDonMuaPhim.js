import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Dimensions } from 'react-native';
import { TextField } from "react-native-material-textfield"
import { Button } from 'native-base'
class HoaDonMuaPhim extends Component {
    static navigationOptions = {
        title: 'Thanh Toán An Toàn',
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
            <View style={styles.container}>
                <Text style={styles.txt}>NGUỒN TIỀN</Text>
                <View style={styles.top}>
                    <Image source={require('../../components/image/logo.png')} style={{ width: 100, height: 50 }}></Image>
                    <View>
                        <Text style={styles.txt1}>Ví EWA</Text>
                        <Text style={{ color: 'gray' }}>6700đ</Text>
                    </View>
                    <Button transparent><Text style={{ color: '#4050B5', fontWeight: 'bold' }}>Thay đổi</Text></Button>
                </View>
                <Text style={styles.txt}>CHI TIẾT GIAO DỊCH</Text>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Phim</Text>
                        <Text style={styles.txt2}>Mắt Biếc</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Suất chiếu</Text>
                        <Text style={styles.txt2}>03/01/2002 - 9:30</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Rạp</Text>
                        <Text style={styles.txt2}>CGV Aeon Bình Tân</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Phòng Chiếu</Text>
                        <Text style={styles.txt2}>Cinema 6</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Ghế</Text>
                        <Text style={styles.txt2}>H04</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Giá vé</Text>
                        <Text style={styles.txt2}>110.000Đ</Text>
                    </View>
                    <View style={{height:1,width:Dimensions.get('window').width,backgroundColor:"#e8e8e8",marginHorizontal:10,marginVertical:5}}></View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Nguời đặt</Text>
                        <Text style={styles.txt2}>NGUYEN LE CHAN NAM</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Số điện thoại</Text>
                        <Text style={styles.txt2}>0935972869</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Email</Text>
                        <Text style={styles.txt2}>channam2497@gmail.com</Text>
                    </View>
                    <View style={{ height: 1, width: Dimensions.get('window').width, backgroundColor: "#e8e8e8", marginHorizontal: 10, marginVertical: 5 }}></View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Số tiền ban đầu</Text>
                        <Text style={styles.txt2}>110.000Đ</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Số tiền giảm</Text>
                        <Text style={styles.txt2}>31.000Đ</Text>
                    </View>
                    <View style={{ height: 1, width: Dimensions.get('window').width, backgroundColor: "#e8e8e8", marginHorizontal: 10, marginVertical: 5 }}></View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Phí giao dịch</Text>
                        <Text style={styles.txt2}>Miễn phí</Text>
                    </View>
                    <View style={{ height: 1, width: Dimensions.get('window').width, backgroundColor: "#e8e8e8", marginHorizontal: 10, marginVertical: 5 }}></View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Tổng tiền</Text>
                        <Text style={styles.txt2}>79.000Đ</Text>
                    </View>
                    <View style={{ height: 1, width: Dimensions.get('window').width, backgroundColor: "#e8e8e8", marginHorizontal: 10, marginVertical: 5 }}></View>

                </View>             
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
                    <Button block 
                    onPress={()=>this.props.navigation.navigate('ThanhCongPhim')}
                    style={{ marginHorizontal: 10, marginTop: 30, marginBottom: 10 }}><Text style={{ color: 'white', fontSize: 16 }}>Xác Nhận</Text></Button>
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
        view1: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 5,

        },
        txt: {
            paddingTop: 15,
            //textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            paddingBottom: 10,
            paddingLeft: 10
        },
        txt4: {
            fontSize: 17,
            marginLeft: 5,
            fontWeight: '700'
        },
        txt2: {
            fontSize: 15,
            marginLeft: 5,
            fontWeight: '700',
            color: '#4050B5'
        },
        txt3: {
            fontSize: 17,
            marginLeft: 5,
            color: 'gray'
        },
        top: {
            //position:"absolute",
            //marginTop:100,
            //marginHorizontal: 10,
            padding: 10,
            marginBottom:15,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            //borderRadius: 10,
            //borderStyle: "solid",
            borderWidth: 1,
            elevation: 10,
            //height:200,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
    }
)

export default HoaDonMuaPhim;