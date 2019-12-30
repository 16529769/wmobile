import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
export default class SearchBar extends Component {
    render() {
        return (
                    <View style={{borderRadius:20,borderWidth:2}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    
            </View>
        );
    }
}