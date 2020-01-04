import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Thumbnail, Button, Text, } from 'native-base'
import { withNavigation } from 'react-navigation';

const data = [
    {
        title: "Mắt Biếc",
        uri: "https://images.vov.vn/w720/uploaded/usobwtngx2k/2019_07_09/at_biec_jhrz.jpg",

    },
    {
        title: "Hai Phượng",
        uri: "https://image1.thegioitre.vn/2018/12/08/lwm40ugskrm9izhvgnbdwkwoo8iqnows0y1iqubj.jpeg",
    },
    {
        title: "Star Wars",
        uri: "https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2015_12_06/p4.jpg",
    },
    {
        title: "RED",
        uri: "https://edugate.vn/wp-content/uploads/2019/06/1-620x930.jpg",
    },
    {
        title: "Hai Đứa Trẻ",
        uri: "https://d1j8r0kxyu9tj8.cloudfront.net/images/1530107877LD91yFRrSE0rBj6.jpg",
    },
    {
        title: "Yêu Nhau",
        uri: "https://afamilycdn.com/k:thumb_w/600/NSzwl6FLDmRsBY68xdXXGfzdw6cKW0/Image/2016/01/minhhang-ac892/minh-hang.jpg",
    },
    {
        title: "The Nun",
        uri: "https://img.chuyenlyky.com/img/2019/04/41856377_190053311804457_8358757420590280051_n-650x813.jpg",
    },
    {
        title: "Bắc Kim Thang",
        uri: "https://cdn.pose.com.vn/assets/2019/08/27/BacKimThang_OfficialPoster.jpg",
    },
    {
        title: "Jumanji",
        uri: "https://dep.com.vn/wp-content/uploads/2019/12/poster-phim-jumaniji-2017.jpg",
    },
    {
        title: "Proud Marry",
        uri: "https://img.idesign.vn/2017/12/20/43625/20-poster-phim-xuat-sac-nhat-nam-2017_09.jpg",
    },
]

const horizontalMargin = 0;
const slideWidth = 130;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 250;

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _renderItem = ({ item, index }) => {

        return (
            <View style={styles.slide}>
                <Image resizeMethod="scale" style={{ width: 120, height: 200 }}
                    source={{ uri: item.uri }}
                />
                <Text style={{ color: '#fff', marginTop: 10, paddingBottom: 10 }}>{item.title}</Text>
                <Button primary 
                onPress={()=>this.props.navigation.navigate("DatPhim")}
                style={{ width: 80, height: 30 }}><Text style={{ textAlign: 'center' }}>Đặt vé</Text></Button>
            </View>



        );
    }

    render() {
        return (
            <View style={{ backgroundColor: '#000', height: 320, marginTop: 8, }}>
                <Carousel
                    firstItem={3}
                    layout={'default'}
                    //ref={(c) => { this._carousel = c; }}
                    data={data}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {

        slide: {
            marginTop: 40,
            width: itemWidth,
            height: itemHeight,
            paddingHorizontal: horizontalMargin,
            alignItems: 'center',
            justifyContent: 'center',

        },
        bottom: {
            width: 200,
            backgroundColor: '#000',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        },
        slideInnerContainer: {
            width: Dimensions.get('window').width,
            flex: 1,
            paddingTop: 10,
            color: '#fff'
            // other styles for the inner container
        }
    }
)


export default withNavigation(MyCarousel);