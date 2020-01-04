import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';

class DatGheRap extends Component {
    static navigationOptions = {
        title: 'Chọn Chỗ Ngồi',
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
            <ScrollView>
                <Image
                    style={{ resizeMode: 'contain' }}
                    source={require('../../components/image/ghe.png')} />
                <View style={{ width: 390, height: 20, backgroundColor: '#e8e8e8' }}></View>
                <View >
                    <View style={styles.view1}>
                        <Text style={{ fontSize: 20, color: 'white', backgroundColor: "#4050B5" }}>C18</Text>
                        <Text style={styles.txt}>Mắt Biếc</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Phòng Chiếu</Text>
                        <Text style={styles.txt2}>Cinema 6</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Suất Chiếu</Text>
                        <Text style={styles.txt2}>03/01/2020 - 09:30</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Chỗ Ngồi </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, bordercolor: '#e8e8e8', marginTop: 5, marginHorizontal: 10 }}></View>
                    <View style={styles.view1}>
                        <Text style={styles.txt3}>Tổng Tiền</Text>
                    </View>
                </View>
                <Button block
                onPress={()=>this.props.navigation.navigate('ThongTinNguoiNhan')}
                 style={{ marginHorizontal: 10, marginTop: 30, marginBottom: 10}}><Text style={{color:'#fff'}}>Tiếp Tục</Text></Button>

            </ScrollView>

        );
    }
}

const styles=StyleSheet.create(
    {
        view1:{
             justifyContent: 'space-between',
              flexDirection: 'row', 
              marginHorizontal: 10,
               marginTop: 10 
        },
        txt:{
             fontSize: 17, 
             marginLeft: 5, 
             fontWeight: '700' 
        },
        txt2:{
            fontSize: 15, 
            marginLeft: 5, 
            fontWeight: '700',
             color: '#4050B5'
        },
        txt3:{
            fontSize: 17, 
            marginLeft: 5, 
            color: 'gray' 
        }
    }
)

export default DatGheRap;