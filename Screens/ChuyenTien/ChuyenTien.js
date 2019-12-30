import React,{Component} from 'react';
import {View, Image,StyleSheet,Dimensions,Text} from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import Divider, {divider} from 'react-native-divider';
import Bank from '../../components/bank';
import {Button} from 'native-base'

export default class TransferMoney extends Component {
    static navigationOptions = {
        title: 'Chuyển tiền',
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
                <View style={styles.top}>
                    <Image resizeMethod="resize" source={{ uri:"https://news.appota.com/wp-content/uploads/2017/12/%C4%91%E1%BB%91i-t%C3%A1c-NOEL.png"}} style={{width:400, height:200,alignItems:'center'}}>
                    </Image>
                </View>
                <View style={styles.center}>
                    <Text style={styles.txt}>Chuyển đến Ví EWA (Miễn phí)</Text>
                    <View style={{borderBottomWidth:0.2,backgroundColor:'#e8e8e8',borderRadius:0.2}}></View>
                    <TextField label='Nhập số điện thoại người nhận'
                        keyboardType='phone-pad'
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        >
                    </TextField>
                    
                    <Text style={styles.txt}>Chuyển đến ngân hàng</Text>
                    <View style={{ borderBottomWidth: 0.4, backgroundColor: '#e8e8e8', borderRadius: 0.2}}></View>

                    <Bank/>
                </View>
                <View style={{ paddingBottom: 20,marginHorizontal:10,flex:1,justifyContent:'flex-end' }}>
                    <Button block onPress={() => this.props.navigation.navigate('TransferDetails')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Xác Nhận</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        container:{
            //backgroundColor: '#e8e8e8'
            flex:1
        },
        top:{
            width:Dimensions.get('window').width,
            //paddingTop:10
        },
        center:{
            //backgroundColor:'#fff',
            paddingTop:0,
            paddingHorizontal:10
        },
        txt:{
            paddingTop:15,
            fontWeight:'bold',
            fontSize:15,
            paddingBottom:10
        },
        
    }
)
