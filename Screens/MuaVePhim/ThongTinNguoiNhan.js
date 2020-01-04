import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField } from "react-native-material-textfield"
import { Button } from 'native-base'
class ThongTinNguoiNhan extends Component {
    static navigationOptions = {
        title: 'Thông Tin Người Nhận',
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
                <Text style={styles.txt}>THÔNG TIN PHIM</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Phim</Text>
                        <Text style={styles.txt2}>Mắt Biếc</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Suất chiếu</Text>
                        <Text style={styles.txt2}>03/01/2020 - 9:30</Text>
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
                </View>
                <Text style={styles.txt}>THÔNG TIN NGƯỜI NHẬN</Text>
                <View style={{ backgroundColor: 'white' }}>
                    <TextField
                        label='Họ Và Tên (Không Dấu)*'
                        keyboardType='email-address'
                        //formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        style={styles.TextIn}

                    />
                    <TextField
                        label='Số Điện Thoại*'
                        keyboardType='email-address'
                        //formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        style={styles.TextIn}

                    />
                    <TextField
                        label='Email*'
                        keyboardType='email-address'
                        //formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        style={{ marginHorizontal: 20 }}

                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
                    <Button block 
                    onPress={()=>this.props.navigation.navigate('HoaDonMuaPhim')}
                    style={{ marginHorizontal: 10, marginTop: 30, marginBottom: 10 }}><Text style={{ color: 'white', fontSize: 16 }}>Mua Vé</Text></Button>
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
             marginTop: 5 
        },
        txt: {
            paddingTop: 15,
            //textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            paddingBottom: 5,
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
        }
    }
)

export default ThongTinNguoiNhan;