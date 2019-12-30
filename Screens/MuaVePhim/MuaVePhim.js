import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView } from 'react-native'

import Divider, { divider } from 'react-native-divider';
import { Button, Icon, Item, Input, Header, Container, Tab, Tabs, TabHeading } from 'native-base';
import Cinema from '../../components/Cinema';
import { SliderBox } from 'react-native-image-slider-box';
import MyCarousel from '../../components/SnapCarousel';
import PhimSapChieu from '../../components/PhimSapChieu';

export default class MuaVeXemPhim extends Component {
    static navigationOptions = {
        title: 'Mua vé xem phim',
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
        this.state = {
            images: [
                "https://i.a4vn.com/2019/8/18/cris-phan-misthy-dong-loat-xuat-hien-cung-k-icm-va-jack-trong-poster-phim-ngan-mot-bom-tan-chuan-bi-ra-lo-fac971.jpg",
                "https://molo.vn/upload/images/wp-content/uploads/2015/12/sccg.jpg",

                "https://media.ngoisao.vn/resize_580/news/2016/01/20/my-nhan-viet-xuat-hien-tren-poster3-ngoisao.vn.stamp2.jpg",

                "https://noiyeuthuong.vn/attachments/444-jpg.9035/"

            ]
        };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Tabs locked tabBarUnderlineStyle={{backgroundColor:'#4050B5'}}>
                    <Tab  heading={
                        <TabHeading style={{backgroundColor:'#fff'}}>
                            <Text style={{ color:'#4050B5'}}>Chọn theo phim</Text>
                        </TabHeading>
                    }>
                        <SliderBox
                            //style={{paddingTop:10}}
                            resizeMethod="scale"
                            images={this.state.images}
                            sliderBoxHeight={150}
                            //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                        >
                        </SliderBox>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>PHIM ĐANG CHIẾU</Text>
                        <MyCarousel />
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 ,marginBottom:10}}>PHIM SẮP CHIẾU</Text>
                        <PhimSapChieu/>

                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#fff' }} 
                        heading={<TabHeading style={{ backgroundColor: '#fff' }}><Text style={{ color: '#4050B5' }}>Chọn theo rạp</Text></TabHeading>}>
                        <Cinema />
                    </Tab>

                </Tabs>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#e8e8e8'
        },
        top: {
            width: Dimensions.get('window').width - 200,
            //paddingTop:10
        },
        center: {
            //backgroundColor:'#fff',

        },
        txt: {
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 15,
            paddingBottom: 10
        },

    }
)
