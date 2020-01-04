import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Thumbnail, Left, Body, Right, List, ListItem } from "native-base";
import { Image, FlatList, TouchableOpacity ,StyleSheet} from 'react-native';
import { withNavigation } from "react-navigation";

const dataArray = [
    {
        title: "CGV",
        content: "79k/2D cho KH bạc & vàng T6 - CN",
        uri: "https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500_thumbnail.jpg ",
        data2: [
            {
                title: "CGV Aeon Bình Tân",
                title2: "1 Đường Số 17A, An Lạc, Bình Tân, Hồ Chí Minh",
                screen: 'DatRap'
            },
            {
                title: "CGV Aeon Tân Phú",
                title2: "30, Lầu 3 Aeon Mall, Bờ Bao Tân Thắng, Sơn Ký, Tân Phú, Hồ Chí Minh",
                screen: 'DatRap'

            },
            {
                title: "CGV Crescent Mall",
                title2: "Crescent Mall, Nguyễn Văn Linh, Tân Phú, Quận 7, Hồ Chí Minh",
                screen: 'DatRap'

            },
            {
                title: "CGV CT Plaza",
                title2: "Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, Phường 2, Tân Bình",
                screen: 'DatRap'

            },
            {
                title: "CGV Giga Mall Thủ Đức",
                title2: "Tầng 6 TTTM Giga Mall, 240, 242 Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh",
                screen: 'DatRap'

            },
            {
                title: "CGV Hùng Vương Plaza",
                title2: "Parkson Hung Vuong Plaza, 126 Đường Hùng Vương, Phường 12, Quận 5, Hồ Chí Minh",
                screen: 'DatRap'
            },

        ]
    },
    {
        title: "Galaxy Cinema",
        //content: "79k/2D cho KH bạc & vàng T6 - CN",
        uri: "https://static.mservice.io/placebrand/s/momo-upload-api-190709172109-636982896699499420.jpg",
        data2: [
            { title: "Galaxy Nguyễn Du", title2: "116 Nguyễn Du, Phường Bến Thành, Quận 1, Phường Bến Thành Quận 1 Hồ Chí Minh" },
            { title: "Galaxy Tân Bình Cinema", title2: "246 Đường Nguyễn Hồng Đào, Phường 13, Tân Bình, Hồ Chí Minh" },
            { title: "Galaxy Nguyễn Văn Quá", title2: "119B Đường Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Hồ Chí Minh" },
            { title: "Galaxy Quang Trung", title2: "304A Quang Trung, Phường 11, Gò Vấp, Hồ Chí Minh" },
            { title: "Galaxy Phạm Văn Chí", title2: "634Bis Đường Phạm Văn Chí, Phường 8, Quận 6, Hồ Chí Minh" },
            { title: "Galaxy Huỳnh Tấn Phát", title2: "1362 Huỳnh Tấn Phát, Phú Mỹ, Quận 7, Hồ Chí Minh" },

        ]
    },
    {
        title: "BHD Star Cineplex",
        content: "Hoàn tiền 10% sau giao dịch",
        uri: "https://static.ybox.vn/2019/7/0/1562515740016-1560182962526-1554068868654-1551220857081-1547971920251-1542502152064-1538538378012-1536099918843-1534395210775-1530455476951-1528458709686-51b09f0e-4675-11e8-85e1-cac091044fd5.png",
        data2: [
            { title: "BHD Star 3/2", title2: "Lầu 4, Siêu Thị Vincom 3/2, 3C Đường 3/2, Q. 10, Tp. Hồ Chí Minh" },
            { title: "BHD Star Bitexco", title2: "Lầu 3 & 4, TTTM ICON 68, 2 Hải Triều, Q.1, Tp. Hồ Chí Minh" },
            { title: "BHD Star Phạm Hùng", title2: "Lầu 4, Centre Mall, C6/27 Phạm Hùng, Bình Chánh, Tp. Hồ Chí Minh" },
            { title: "BHD Star Quang Trung", title2: "Tầng B1&B2, TTTM Vincom, 190 Quang Trung, Q. Gò Vấp, Tp. Hồ Chí Minh" },
            { title: "BHD Star Thảo Điền", title2: "Tầng 5, TTTM Vincom Centre, 159 Xa Lộ Hà Nội, Quận 2, Tp. Hồ Chí Minh" },


        ]
    },
    {
        title: "CineStar",
        //content: "79k/2D cho KH bạc & vàng T6 - CN",
        uri: "https://www.findjobs.vn//htdocs/images/employers/201907/social_share_black.png",
        data2: [
            { title: "Cinestar Quốc Thanh", title2: "271 Nguyễn Trãi, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh" },
            { title: "Cinestar Hai Bà Trưng", title2: "135 Hai Bà Trưng, P. Bến Nghé, Q.1, Tp. Hồ Chí Minh" },
            { title: "Cinestar Đà Lạt", title2: "Quảng trường Lâm Viên, P.10. Tp. Đà Lạt" },
        ]
    },
    {
        title: "MegaGS",
        //content: "79k/2D cho KH bạc & vàng T6 - CN",
        uri: "https://yt3.ggpht.com/a-/AN66SAw27TExXNreq-i0vQizyQ9BmjI9NE26Nhh9Aw=s900-mo-c-c0xffffffff-rj-k-no",
        data2: [
            { title: "Mega GS Cao Thắng", title2: "Lầu 6 - 7, 19 Cao Thắng, P.2, Q.3, Tp. Hồ Chí Minh" },
        ]
    },
    {
        title: "Lotte Cinema",
        //content: "79k/2D cho KH bạc & vàng T6 - CN",
        uri: "https://cardy.vn/upload/images/h11/images/logo-diem-uu-dai/640x480/2/logolotte.jpg",
        data2: [
            { title: "Lotte Nam Sài Gòn", title2: "Tầng 3, Lotte Mart, 469 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7, Tp. Hồ Chí Minh" },
            { title: "Lotte Diamond", title2: "Tầng 13, Diamond Plaza, 34 Lê Duẫn, Q.1, Tp. Hồ Chí Minh" },
            { title: "Lotte Cộng Hoà", title2: "Tầng 4, Pico Plaza, 20 Cộng Hòa, P.12, Q. Tân Bình, Tp. Hồ Chí Minh" },
            { title: "Lotte Cantavil", title2: "Tầng 7, Cantavil Premier, Xa lộ Hà Nội, P. n Phú, Q.2, TP. Hồ Chí Minh" },
            { title: "Lotte Phú Thọ", title2: "Tầng 4 Lotte Mart Phú Thọ, ngã tư 3/2 và Lê Đại Hành, Q.11, Tp. Hồ Chí Minh" },
        ]
    },
];

class TheoPhim extends Component {
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                // borderBottomWidth:1
            }}>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square small source={{ uri: item.uri }} />
                            </Left>
                            <Body>
                                <Text>{item.title}</Text>
                                <Text note>{item.content}</Text>
                            </Body>
                            {/* <Right>
                                <Icon name="arrow-forward" ></Icon>
                            </Right> */}
                        </ListItem>
                    </List>
                </Content>

                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
                    : <Icon style={{ fontSize: 18 }} name="arrow-down" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <FlatList
                    data={item.data2}
                    renderItem={({ item }) => (
                        <Content >
                            <List>
                                <ListItem avatar>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screen)}>
                                        <Body>
                                            <Text>{item.title}</Text>
                                            <Text note>{item.title2}</Text>
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
                    )}
                //keyExtractor={item => item.key}
                />
            </View>
        );
    }
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderContent={this._renderContent.bind(this)}
                        renderHeader={this._renderHeader}
                    />
                </Content>
            </Container>
        );
    }
}

const styles=StyleSheet.create(
    {
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
export default withNavigation(TheoPhim);
