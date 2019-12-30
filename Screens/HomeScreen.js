import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import { Icon, Footer, FooterTab, Button} from 'native-base';
import Menuitem from '../components/mainitem';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://quatang1102.com/wp-content/uploads/2012/10/khuyen-mai-qua-tang.png",
                "https://bacminhcanh.com/wp-content/uploads/2015/12/banner-noel-2016-web.jpg",
                "https://demvn.files.wordpress.com/2010/12/gs1.jpg",
                "https://tranhtheutnc.com/wp-content/uploads/2017/12/giangsinh4.jpg",

            ]
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <View style={{ paddingLeft: 10, paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row', paddingEnd: 10 }}>
                            <Text style={{
                                fontSize: 30, fontWeight: 'bold',

                                color: 'white'
                            }}>E W A</Text>
                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                <Icon name="bulb" style={{ color: 'white', marginHorizontal: 20 }} />
                                <Icon name="menu" style={{ color: 'white' }} />
                            </View>


                        </View>
                        <View style={styles.compo}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dien')}>
                                <View styles={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ alignItems: "center" }}>
                                        <Icon name="log-in" style={{ color: 'white' }}/>
                                    </View>
                                    <Text style={styles.txt}>NẠP TIỀN{'\n'}VÀO VÍ</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Transfer')}>
                                <View>
                                    <View style={{ alignItems: "center", paddingBottom: 9 }}>
                                        <Icon name="cash" style={{ color: 'white' }}/>
                                    </View>
                                    <Text style={styles.txt}>RÚT TIỀN</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Phim')}>
                                <View>
                                    <View style={{ alignItems: "center" }}>
                                        <Icon name='barcode' style={{ color: 'white' }}/>
                                    </View>
                                    <Text style={styles.txt}>MÃ{'\n'}THANH TOÁN</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MuaThe')}>
                                <View>
                                    <View style={{ alignItems: "center", paddingBottom: 9 }}>
                                        <Icon name="link" style={{ color: 'white' }} />
                                    </View>
                                    <Text style={styles.txt}>NGÂN HÀNG</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.fea}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ paddingLeft: 20, paddingTop: 27, fontSize: 17  }}>Số dư ví : </Text>
                            <Text style={{ paddingRight: 20, paddingTop: 25, fontSize: 18, fontWeight: '700' }}>670.000đ </Text>
                        </View>
                        <View style={{ borderBottomWidth: 0.2, backgroundColor: '#e8e8e8', marginTop: 20 }}></View>                  
                    </View>
                    <View style={{alignItems:'center',backgroundColor:'white',paddingTop:30}}>
                        <Menuitem GetNaviga = {this.props.navigation}/>
                    </View>

                    {/* <View style={styles.center}>
                        <Menuitem />
                    </View> */}


                    {/* <View style={styles.slider}>
                        <SliderBox
                            resizeMethod ="scale"
                            images={this.state.images}
                            sliderBoxHeight={120}
                            //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                        />
                    </View> */}
                    {/* <View style={styles.center1}>
                        <Menuitem />
                    </View> */}
                    <Footer>
                        <FooterTab>
                            <Button vertical>
                                <Icon name="home" style={{ color: 'white'}} />
                                <Text style={{ color: 'white',fontWeight:'700' }}>Trang chủ</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="time" />
                                <Text style={{ color: '#C3C9EB', fontWeight: '700' }}>Giao Dịch</Text>
                            </Button>
                            <Button vertical active>
                                <Icon active name="gift" style={{ color: '#C3C9EB'}}/>
                                <Text style={{ color: '#C3C9EB', fontWeight: '700' }}>Ưu Đãi</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="person" />
                                <Text style={{ color: '#C3C9EB', fontWeight: '700'}}>Cá Nhân</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            //paddingHorizontal:10,
            backgroundColor: '#e8e8e8',
            flexDirection: 'column'
        },
        top: {
            //position: 'absolute',
            //marginHorizontal: 10,

            width: '100%',
            height: 250,
            backgroundColor: '#4050B5',
            //justifyContent: 'space-between'
        },
        compo: {
            paddingLeft: 10,
            paddingTop: 20,
            flexDirection: 'row',
            paddingEnd: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        fea: {
            //flexDirection: "row",
            //alignItems: 'center',
            //justifyContent: 'space-around',
            position: 'absolute',
            marginTop: 170,
            height:80,
            //marginHorizontal: 10,
            width: Dimensions.get('window').width,
            backgroundColor: '#fff',
            //borderTopWidth:3,
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            //elevation: 10
        },
        center: {
            width: Dimensions.get('window').width - 20,
            //height: Dimensions.get('window').height,
            //position: 'relative',
            //top: 70,
            marginTop: 70,
            //left: 80,        
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginHorizontal: 10,
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1,
            //backgroundColor:'#0E51A7'
        },

        txt: {
            textAlign: "center",
            marginTop: 10,
            fontWeight: 'bold',
            color:'white'
        },
        slider: {
            width: Dimensions.get('window').width,
            //marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 10,
            borderStyle: "solid",
        },
        center1: {
            width: Dimensions.get('window').width - 20,
            //height: Dimensions.get('window').height,
            //position: 'relative',
            //top: 70,
            marginTop: 10,
            marginBottom: 10,
            //left: 80,        
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginHorizontal: 10,
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1,
            //backgroundColor:'#0E51A7'
        },

    }
)

