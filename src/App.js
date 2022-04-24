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
//Cấu hình router
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import HeaderHome from './Component/HeaderHome/HeaderHome';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import BaiTapFormDangKy from './pages/BaiTapFormDangKy/BaiTapFormDangKy';
import Lifecycle from './pages/LifeCycle/Lifecycle';
import DemoUseState from './pages/Hooks/DemoUseState/DemoUseState';
import DemoUseEffect from './pages/Hooks/DemoUseEffect/DemoUseEffect';
import ApiRCC from './pages/Api/DemoApi/ApiRCC';
import ApiRfc from './pages/Api/DemoApi/ApiRfc';
import DemoUseCallback from './pages/Hooks/DemoUseCallback/DemoUseCallback';


function App() {

  return (
    <BrowserRouter>
    <HeaderHome />
    <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/profile'} component={Profile} />
        <Route exact path={'/detail/:postid'} component={Detail} />
        <Route exact path={'/baitapform'} component={BaiTapFormDangKy} />
        <Route exact path={'/lifecycle'} component={Lifecycle} />
        <Route exact path={'/usestate'} component={DemoUseState} />
        <Route exact path={'/useeffect'} component={DemoUseEffect} />
        <Route exact path={'/apircc'} component={ApiRCC} />
        <Route exact path={'/apirfc'} component={ApiRfc} />
        <Route exact path={'/usecallback'} component={DemoUseCallback} />
        {/* Trang mặc định luôn nằm dưới cùng */}
        <Route exact path={'/'} component={Home} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
