import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
    View,
    StyleSheet,
    Dimensions,
    Button,
    TouchableOpacity
} from 'react-native';

import { Text } from 'native-base';

class QrCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {navi} = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <RNCamera style={{ flex: 1, ...StyleSheet.absoluteFill }} />
                <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'space-around' }}>

                    <Text style={{ fontSize: 20, fontWeight: "700", color: 'white' }}>
                        Di CHUYỂN ĐỂ QUÉT MÃ QR
                        </Text>

                    <View style={{ width: 200, height: 200 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, borderLeftWidth: 4, borderTopWidth: 4, borderColor: 'white' }} />
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1, borderRightWidth: 4, borderTopWidth: 4, borderColor: 'white' }} />
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, borderLeftWidth: 4, borderBottomWidth: 4, borderColor: 'white' }} />
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1, borderRightWidth: 4, borderBottomWidth: 4, borderColor: 'white' }} />
                        </View>
                    </View>
                    <Button title = " Xác Nhận "
                    color="#4050B5"
                    onPress = { () => this.props.navigation.navigate('ChiTietHoaDonOnline')}></Button>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create(
    {

    },
)

export default QrCamera;