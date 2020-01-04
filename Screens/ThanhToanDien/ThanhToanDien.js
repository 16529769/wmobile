import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import { Image, StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
export default class ThanhToanDien extends Component {
    static navigationOptions = {
        title: 'Thanh toán Điện',
        headerStyle: {
            backgroundColor: '#4050B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
       
        // headerLeftContainerStyle:{
        //     paddingLeft:100
        // },
    };
    render() {
        return (
            <Container>
                <Content>
                 
                        <ListItem thumbnail style={styles.list}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('DienDe')}>
                            
                            <Left>
                                <Button style={{ backgroundColor: "#fff" }}>
                                    <Image source={require('../../components/icon/dienluc2.png')} />
                                </Button>
                            </Left>
                            <Body>
                                <Text style={styles.txt1}>Điện lực Hồ Chí Minh</Text>
                                <Text style={styles.txt2}>Các quận, huyện tại TP. HCM</Text>
                            </Body>

                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                            </TouchableOpacity>

                        </ListItem>

                   

                    <ListItem thumbnail style={styles.list}>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Image source={require('../../components/icon/evnhn.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.txt1}>Điện lực Hà Nội</Text>
                            <Text style={styles.txt2}>Tất cả quận, huyện của Tp. Hà Nội</Text>
                        </Body>

                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>


                    <ListItem thumbnail style={styles.list}>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Image source={require('../../components/icon/EVNCPC.png')} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.txt1}>Điện lực miền Trung</Text>
                            <Text style={styles.txt2}>Quảng Bình, Đà Nẵng, Quảng Nam,Phú Yên,...</Text>
                        </Body>

                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem thumbnail style={styles.list}>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Image source={require('../../components/icon/spc.png')} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.txt1}>Điện lực miền Nam</Text>
                            <Text style={styles.txt2}>Đồng Nai, Cần Thơ, Bình Dương, Lâm Đồng,...</Text>
                        </Body>

                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>


                    <ListItem thumbnail style={styles.list}>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Image source={require('../../components/icon/npc.png')} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.txt1}>Điện lực miền Bắc</Text>
                            <Text style={styles.txt2}>Quảng Ninh, Bắc Ninh, Nam Định, Thái Bình</Text>
                        </Body>

                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create(
    {
        list: {
            width: Dimensions.get('window').width - 20,
            paddingLeft:10,
            paddingRight:10
        },
        txt1: {
            fontSize: 17,
            //color: 'gray'
            //paddingTop:20
        },
        txt2: {
            fontSize: 14,
            color: 'gray'
        }
    }
)