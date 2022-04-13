import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'
export default class Register extends Component {

  state = {
    kiemTra:true
  }

  dangKy = () =>{
    this.setState({
      kiemTra:false
    })
    console.log('submit');
  }

  render() {
    return (
      <div className='container'>
        <Prompt 
          when = {this.state.kiemTra}
          message={location => ('Bạn có chắc muốn rời khỏi trang')}
        />
        <h3>Đăng ký</h3>
        <div className='form-group'>
          <p>Tài khoản</p>
          <input id="taiKhoan" className='form-control' />
        </div>
        <div className='form-group'>
          <p>Họ tên</p>
          <input id="hoTen" className='form-control' />
        </div>
        <div className='form-group'>
          <p>Mật khẩu</p>
          <input id="matKhau" className='form-control' />
        </div>
        <div className='form-group'>
          <p>Email</p>
          <input id="email" className='form-control' />
        </div>
        <div className='form-group'>
          <p>Số điện thoại</p>
          <input id="soDienThoai" className='form-control' />
        </div>
        <div className='form-group'>
          <button className='btn btn-success' onClick={this.dangKy}>Đăng ký</button>
        </div>
      </div>
    )
  }
}
