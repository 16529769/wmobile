import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/DangNhapDangKi/Login';
import SignUpScreen from './Screens/DangNhapDangKi/Signup';
import DienScreen from './Screens/ThanhToanDien/ThanhToanDien';
import DienDetails from './Screens/ThanhToanDien/Dien';
import TransferMoney from './Screens/ChuyenTien/ChuyenTien';
import TransferMoneyDetails from './Screens/ChuyenTien/ChuyenTienDetails';
import SafeTransfer from './Screens/ChuyenTien/SafeTransfer';
import MuaVeXemPhim from './Screens/MuaVePhim/MuaVePhim';
import MuaTheDienThoai from './Screens/MuaTheDienThoai/MuaTheDienThoai';
import SafeTransferTheDienThoai from './Screens/MuaTheDienThoai/SafeTransferTheDienThoai';
import SafeTransferTheDienThoai2 from './Screens/MuaTheDienThoai/SafeTransferTheDienThoai2';
import ThanhCongDT from './Screens/MuaTheDienThoai/ThanhCongDT'
import ThanhCongChuyenTien from './Screens/ChuyenTien/ThanhCongChuyenTien';
import ThongTinHoaDonDien from './Screens/ThanhToanDien/ThongTinHoaDonDien';
import SafeTransferDien from './Screens/ThanhToanDien/SafeTransferDien';
import ThanhCongDien from './Screens/ThanhToanDien/ThanhCongDien';
import RNCamera from './Screens/QrCamera/QrCamera';

const AppNavigator = createStackNavigator(
  {
    Login:
    {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        //header:null
      }
    },
    Home:
    {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }

    },
    Dien:
    {
      screen: DienScreen,
    },
    DienDe: {
      screen: DienDetails,
    },
    Transfer: {
      screen: TransferMoney,
    },
    TransferDetails: {
      screen: TransferMoneyDetails,
    },
    SafeTransfer: {
      screen: SafeTransfer,
    },
    Phim: {
      screen: MuaVeXemPhim,
    },
    MuaThe: {
      screen: MuaTheDienThoai
    },
    ChiTietMuaThe: {
      screen: SafeTransferTheDienThoai
    },
    ChiTietMuaThe2: {
      screen: SafeTransferTheDienThoai2
    },
    ThanhCongDT: {
      screen: ThanhCongDT,
      navigationOptions: {
        header: null
      }
    },
    ThanhCongChuyenTien: {
      screen: ThanhCongChuyenTien,
      navigationOptions: {
        header: null
      }
    },
    ThongTinHoaDonDien: {
      screen: ThongTinHoaDonDien,
    },
    SafeTransferDien: {
      screen: SafeTransferDien,
    },
    ThanhCongDien:{
      screen: ThanhCongDien,
      navigationOptions: {
        header: null
      }
    },
    RNCamera:{
      screen:RNCamera,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    initialRouteName: 'Login',
    headerLayoutPreset:'center',
    headerMode:"float",
    headerTransitionPreset:{
      
    }
  }
);

// Other code for App component here...

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
