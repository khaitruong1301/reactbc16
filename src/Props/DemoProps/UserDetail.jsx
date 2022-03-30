import React, { Component } from 'react'

export default class UserDetail extends Component {



    render() {
        let {hocVien} = this.props;


        return (
            <div className='d-flex'>
                <div style={{width:200}}>
                    <img src={hocVien.hinhAnh} alt='...' className='w-100' />
                </div>
                <div className='ml-2'>
                    <p>Họ tên: {hocVien.hoTen}</p>
                    <p>Ngày sinh: {hocVien.ngaySinh}</p>
                    <p>Email: {hocVien.email}</p>
                    <p>Số điện thoại: {hocVien.soDienThoai}</p>
                </div>
            </div>
        )
    }
}
