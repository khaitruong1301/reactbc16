import React, { Component } from 'react';
//Cách 1: import file => ảnh hưởng đến tất cả component khác 
import '../assets/styles/index.css';
import ExThayDoiAnhDaiDien from './ExThayDoiAnhDaiDien';
import ExThayDoiFontChu from './ExThayDoiFontChu';
import ExThayDoiMauXe from './ExThayDoiMauXe';
//Cách 2 import chỉ component này sử dụng
import style from './StateDemo.module.css';

export default class StateDemo extends Component {
    //state: Là thuộc tính có sẵn được kế thừa từ reactClassComponent, state quản lý các trạng thái thay đổi trên giao diện khi người dùng thao tác => khi giá trị state thay đổi giao diện sẽ được render lại. 
    state = {
        login: false
    }

    // login = false;
    userName = 'khaicybersoft';

    renderLogin = () => {
        // let objectStyle = {backgroundColor:'#fff'}
        //Trả về nội dung giao diện đăng nhập hoặc chứa đăng nhập
        if (this.state.login) {
            return <p style={{
                backgroundColor: '#fff', padding: '10px'
            }} className={`${style['text-orange']} mt-2`}>
                Hello ! {this.userName}
            </p>
        }
        return <button onClick={() => {
            //click đăng nhập => gọi hàm handleLogin
            this.handleLogin()
        }} type='button' className='btn btn-success'>
            Đăng nhập
        </button>
    }
    handleLogin = () => {
        // this.state.login = true;
        // console.log('this.state.login',this.state.login);
        // let newState = { login: true };
        //this.setState là thuộc tính có sẵn của react class component. Dùng để thay đổi giá trị state của component và tự render lại giao diện. this.setState là 1 hàm bất đồng bộ.

        this.setState({
            login: true
        }, () => {
            //Hàm này sẽ gọi sau khi state thay đổi và giao diện render xong
            console.log(this.state);;

        });

    }


    render() {
        //b4-navbar-background
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* {this.login ? <p className='text-light nav-item'>Hello ! khaicybersoft</p> : <button className='btn btn-success'>
                            Đăng nhập    
                        </button>} */}
                            {this.renderLogin()}

                        </form>
                    </div>
                </nav>
                <hr />
                <ExThayDoiFontChu />
                <hr />
                <ExThayDoiAnhDaiDien />
                <hr />
                <ExThayDoiMauXe />
            </div>
        )
    }
}
