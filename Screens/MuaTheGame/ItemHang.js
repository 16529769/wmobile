import React, { Component } from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';
import {thumbnail, ListItem, Left,Body,Right,Button,Icon} from 'native-base';
import {TouchableOpacity,Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class ItemHang extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ListItem thumbnail style={styles.list}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('MuaTheGameOnlineChiTiet')}>
                    <Left>
                        <Button style={{ backgroundColor: "#fff" }}>
                            <Image source={{uri: this.props.image}} style = {{width: 50,height:50}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.txt1}> {this.props.name}</Text>
                        <Text style={styles.txt2}>{this.props.company}</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </TouchableOpacity>
            </ListItem>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
    },
    containerTitle: {
        width: 320,
        flexDirection: 'column',
        marginLeft: 15,
    },
    txt1: {
        fontSize: 16, fontWeight: 'bold'
    },
    txt2: {
        fontSize: 16,
    }

})

export default withNavigation(ItemHang);