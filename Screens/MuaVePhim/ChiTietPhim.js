import React, { Component } from 'react';
import { View ,StyleSheet,Image, Dimensions,Text} from 'react-native';


class ChiTietPhim extends Component {
    static navigationOptions = {
        title: 'Thông Tin Phim',
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
        this.state = {  };
    }
    render() {
        return (
                <View style={{}}>
                <Image
                    style={{width:500,height:300,marginBottom:10}}
                    source={{ uri: 'https://i.ytimg.com/vi/MNm77lvTfi4/maxresdefault.jpg'}}
                    resizeMode="stretch"
                />
                
               <View style={{flexDirection:'row',marginHorizontal:10}}>
                   <Text style={{fontSize:14,backgroundColor:"#4050B5",color:'white'}}>C16</Text>
                    <Text style={{fontSize:16,paddingLeft:10}}>MẮT BIẾC</Text>
               </View>
                <Text style={{ fontSize: 14, marginHorizontal: 10,color:"gray",paddingVertical:5 }}>Tình Cảm | 2D | 120 Phút</Text>
                <Text style={{fontSize:16,marginHorizontal:10}}>
                Mắc Biếc: Một sự kết hợp tinh tế vẻ đẹp thuần khiết của văn chương Nguyễn Nhật Ánh, với những khung hình mãn nhãn đặc trưng của Victor Vũ, đã từng khiến khán giả choáng ngợp từ “Thiên mệnh anh hùng” tới “Tôi thấy hoa vàng trên cỏ xanh”. 
                </Text>
                </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },

    }
)

export default ChiTietPhim;