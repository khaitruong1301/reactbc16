import logo from './logo.svg';
import './App.css';
import CardJSX from './Component/DemoComponent/CardJSX';
import CardFunc from './Component/DemoComponent/CardFunc';
import BaiTapLayout from './Component/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import ProductList from './Props/ShoesShop/ProductList';
import DemoXemChiTiet from './Props/DemoXemChiTiet/DemoXemChiTiet';
import BTGioHang from './DemoRedux/BTGioHang/BTGioHang';
import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {

  return (
    <div className="App">
        {/* <CardFunc />
        <CardJSX /> */}
        {/* <BaiTapLayout /> */}
        {/* <Databinding /> */}
        {/* <HandleEvent /> */}
        {/* <StateDemo /> */}
        {/* <p className='text-color-yello'>123</p> */}
        {/* <RenderWithMap /> */}
        {/* <DemoProps /> */}
        {/* <ProductList /> */}
        {/* <DemoXemChiTiet /> */}
        {/* <BTGioHang /> */}
        <BaiTapGameXucXac />
    </div>
  );
}

export default App;
