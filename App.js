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
import QrCamera from './Screens/QrCamera/QrCamera';
import ThanhCongNapThe from './Screens/MuaTheDienThoai/ThanhCongMuaMaThe';
import MuaTheGame from './Screens/MuaTheGame/MuaTheGame';
import MuaTheChiTiet from './Screens/MuaTheGame/MuaTheChiTiet';
import XacNhan from './Screens/MuaTheGame/XacNhan';
import ThanhCongMuaMaThe from './Screens/MuaTheGame/ThanhCongTheGame';
import ChiTietHoaDon from './Screens/QrCamera/ChiTietHoaDon';
import XacNhanThanhToanHoaDon from './Screens/QrCamera/XacNhanThanhToanHoaDon';
import ThanhCongQr from './Screens/QrCamera/ThanhCongQr';
import ChiTietPhim from './Screens/MuaVePhim/ChiTietPhim';
import DatRap from './Screens/MuaVePhim/DatRap';
import DatGheRap from './Screens/MuaVePhim/DatGheRap';
import ThongTinNguoiNhan from './Screens/MuaVePhim/ThongTinNguoiNhan';
import HoaDonMuaPhim from './Screens/MuaVePhim/HoaDonMuaPhim';
import ThanhCongPhim from './Screens/MuaVePhim/ThanhCongPhim';
import DatPhim from './Screens/MuaVePhim/DatPhim';
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
    ThanhCongMuaMaThe: {
      screen: ThanhCongNapThe,
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
      screen:QrCamera,
      navigationOptions: {
        header: null
      }
    },
    MuaTheGameOnline: {
      screen: MuaTheGame,
      
    },
    MuaTheGameOnlineChiTiet : {
      screen: MuaTheChiTiet,
    },
    XacNhanMuaMaTheGame: {
      screen: XacNhan
    },
    ThanhCongMuaMaTheGame: {
      screen: ThanhCongMuaMaThe,
      navigationOptions: {
        header: null
      }
    },
    ChiTietHoaDonOnline : {
      screen: ChiTietHoaDon
    },
    XacNhanHoaDonOnline: {
      screen:XacNhanThanhToanHoaDon
    },
    ThanhToanThanhCongQr: {
      screen: ThanhCongQr,
      navigationOptions: {
        header:null
      }
    },
    ChiTietPhim:{
      screen: ChiTietPhim, 
    },
    DatRap: {
      screen: DatRap,
    },
    DatGheRap: {
      screen: DatGheRap,
    },
    ThongTinNguoiNhan: {
      screen: ThongTinNguoiNhan,
    },
    HoaDonMuaPhim:{
      screen:HoaDonMuaPhim,
    },
    ThanhCongPhim:{
      screen: ThanhCongPhim,
      navigationOptions:{
        header:null,
      }
    },
    DatPhim:{
      screen:DatPhim,
    }
   
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset:'center', 
  }
);

// Other code for App component here...

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
