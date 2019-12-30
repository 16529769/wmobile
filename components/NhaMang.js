import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, FlatList, Dimensions,TouchableHighlight } from 'react-native';



const DATA = [
    {
        id: 1,
        uri:"https://gooc.vn/wp-content/uploads/2019/07/mobifone2.png"
    },
    {
        id: 2,
        uri:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3_eAcz-_YexdYKAf8n0F4rFOQKB79oFYXohGdUAa4hb12ypu&s"
    },
    {
        id: 3,
        uri: "https://znews-stc.zdn.vn/static/topic/company/vinaphone.jpg" 
    },
    {
        id: 4,
        uri:  "https://fptshop.com.vn/Uploads/Mediums/2018/12/17/636806568723332528_Vinammobile.png"
    },
    {
        id: 5,
        uri:  "https://cdn.vatgia.vn/pictures/fullsize/2014/01/14/kzx1389718373.jpg"
    },
    
];


export default class NhaMang extends Component {

    constructor(props) {
        super(props);
        this.state = {
                touch:2
        };
    }

    _Touch=(id)=>{
        this.setState({touch:id})
    }

    render() {
        return (

            <FlatList
                horizontal
                data={DATA}
                renderItem = { ({ item }) => (
                    <TouchableHighlight 
                      onPress={()=>this._Touch(item.id)}
                      underlayColor="white"
                      activeOpacity={0.8}
                    style={this.state.touch == item.id ? styles.borderTouched : styles.borderNonTouched}                   
                    >
                        <View style={styles.menu}>

                            <Image
                                style={{ width: 70, height: 70 }}
                                //resizeMethod='scale'
                                resizeMode='stretch'
                                source={{ uri: item.uri }}
                            ></Image>
                        </View>
                       
                    </TouchableHighlight>
                   
                )}
                keyExtractor={item => item.id}
            //numColumns='1'
            />


        );
    }
}

const styles = StyleSheet.create(
    {
        menu:{
        
        },
        borderTouched: {
            
             borderWidth:3,
            // borderRadius:10,
            borderColor:'#4050B5',
            alignItems: "center",
            //borderRightWidth:1
            marginTop: 10,
            padding:5,
            margin:5,
            height:80,
            width:80
            
        },
        borderNonTouched:{
            borderWidth: 2,
            // borderRadius:10,
            borderColor: '#e8e8e8',
            alignItems: "center",
            //borderRightWidth:1
            marginTop: 10,
            padding: 5,
            margin: 5,

            height: 80,
            width: 80
        }


    }
)
