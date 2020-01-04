import React, { Component } from 'react';
import { View,Text,TouchableOpacity,FlatList,StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Button, Thumbnail } from 'native-base'

class ChiTietHoaDon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tableHead: ['Danh Sách', 'Giá Tiền', 'Số Lượng', 'Tổng tiền'],
            tableData: [
                ['Iphone 11 ProMax 64GB', '34.324.000', '3','102.972.000'],
                ['Ipad Air 2019', '11.800.000', '2','23.600.000'],
                ['Apple Air Pods 2', '300.000', '3','600.000'],
                ['Macbook Pro 2019 - 13 inch', '32.000.000', '1','32.000.000']
      ]
         };
    }
    static navigationOptions = {
        title: 'Chi tiết hóa đơn',
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
            <View style = {styles.container}> 
                <View style = {styles.informationBox}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.txt} > Chủ tài khoản </Text>
                        <Text  style={styles.txt2}> Nguyễn Lê Chấn Nam </Text> 
                    </View>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.txt}> Số điện thoại </Text>
                        <Text style={styles.txt2}> 0344048137 </Text>
                    </View>
                </View>
                <View style = {{flexDirection: 'column', flex: 15,padding: 15,}}>
                    <Text style ={{ paddingBottom:20,fontSize:16},styles.txt1}> Chi tiết hóa đơn </Text>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#e8e8e8'}} style={{marginTop:10}}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={this.state.tableData} textStyle={styles.txt3}/>
                    </Table>
                    <View style= {{marginTop: 30,flex: 1,}}>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.txt2}> Tổng Phụ </Text>
                            <Text style={styles.txt2}> 159.172.000 </Text> 
                        </View>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.txt2}> Giảm giá( 5% ) </Text>
                            <Text style={styles.txt2}> 7.958.600 </Text>
                        </View>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.txt}> Tổng cộng  </Text>
                            <Text style = {styles.txt}> 151.213.400 </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginHorizontal: 10,
                            paddingBottom: 20
                        }}>
                    <Button block onPress={() => this.props.navigation.navigate('XacNhanHoaDonOnline')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Xác Nhận</Text>
                    </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex : 1,
        padding: 2,
    },
    informationBox: {
        flex: 2,
        borderRadius: 10,
        flexDirection: 'column',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
        padding: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        elevation: 10,
        marginHorizontal:10,
    },
    head: { height: 40, backgroundColor: '#4050B5' },
    text: { margin: 6,color:"#fff" },
    txt1: {
        fontSize: 16, fontWeight: 'bold'
    },
    txt2: {
        fontSize: 16,
    },
    txt3:{
        color:"#000",
        margin: 6,
    },
    txt:{
        fontWeight:'700',
        fontSize:16
    }
})

export default ChiTietHoaDon;