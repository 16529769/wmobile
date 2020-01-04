import React, { Component } from 'react';
import { Container, Header, Content, Icon, Accordion, Text, View, Thumbnail, Left, Body, Right, List, ListItem } from "native-base";
import { StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';



const DATA = [
    {
        id: 1,
        phim: 'Mắt Biếc',
        chitiet: 'Tình cảm | 2D | 117 phút',
        ngay: ' 20/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster_mat_biec_official_1.jpg",
        screen: "ChiTietPhim"
    },
    {
        id: 2,
        phim: 'Những chú mèo',
        chitiet: 'Nhạc kịch | 2D | 119 phút',
        ngay: ' 24/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/c/a/cats_1.jpg",
        screen: "ChiTietPhim"

    },
    {
        id: 3,
        phim: 'Rambo : Hồi kết đẫm máu',
        chitiet: 'Hành động | 2D | 99 phút',
        ngay: ' 24/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/r/a/rambo_last_blood-vietnam-explode_poster_1__1.jpg",
        screen: "ChiTietPhim"

    },
    {
        id: 4,
        phim: 'Điệp viên ẩn danh',
        chitiet: 'Hoạt hình | 2D, 3D | 104 phút',
        ngay: '27/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/s/p/spies_in_disguise_1.jpg",
        screen: "ChiTietPhim"

    },
    {
        id: 5,
        phim: 'Trẻ trâu khởi nghiệp',
        chitiet: 'Hài, tâm lý | 2D | 123 phút',
        ngay: ' 27/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/r/s/rsz_start-up_poster_social_1.jpg",
        screen: "ChiTietPhim"

    },
    {
        id: 6,
        phim: 'Chồng cũ, tình mới',
        chitiet: 'Hài, tình cảm | 2D | 132 phút',
        ngay: ' 27/12/2019',
        uri: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/t/e/teaser_poster_-_chong_cu_tinh_moi_1.jpg",
        screen: "ChiTietPhim"

    },
];

class TheoRap extends Component {

    render() {
        return (

            <View style={{ backgroundColor: '#fff' }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: '#fff' }}>
                            <Content >
                                <List>
                                    <ListItem avatar>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate(item.screen)}>
                                            <Left>
                                                <Thumbnail square large source={{ uri: item.uri }} resizeMethod="scale" style={{ width: 50, height: 50 }} />
                                            </Left>
                                        </TouchableOpacity>

                                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate(item.screen)}>
                                            <Body>
                                                <Text>{item.phim}</Text>
                                                <Text note>{item.chitiet}</Text>
                                                <Text note style={{ backgroundColor: '#4050B5', width: 80, borderRadius: 20, color: '#fff', marginTop: 3 }}>{item.ngay}</Text>
                                            </Body>
                                        </TouchableOpacity>
                                    </ListItem>
                                </List>
                                <View style={{ flexDirection: "row", marginLeft: 30 }}>
                                    <Text style={{ paddingTop: 10, fontSize: 20, color: "gray", fontWeight: '700' }}>2D</Text>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DatGheRap')}>
                                        <Text note style={styles.txt}>9:30</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DatGheRap')}>
                                        <Text note style={styles.txt}>11:30</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DatGheRap')}>
                                        <Text note style={styles.txt}>13:30</Text>
                                    </TouchableOpacity>
                                </View>
                            </Content>
                        </View>
                    )}
                //keyExtractor={item => item.key}

                />
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        menu: {
            alignItems: "center",
            padding: 5,
            //borderRightWidth:1
            width: Dimensions.get('window').width / 4 - 5,
            height: 80,
            marginTop: 10

        },
        txt: {
            backgroundColor: '#4050B5',
            fontSize: 17, width: 60,
            color: '#fff',
            marginTop: 10,
            textAlign: 'center',
            marginLeft: 30
        }


    }
)

export default withNavigation(TheoRap);
