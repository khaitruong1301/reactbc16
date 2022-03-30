import React, { Component } from 'react'
import CardProduct from './CardProduct'
import UserDetail from './UserDetail'

export default class DemoProps extends Component {

    hocVien = {
        hoTen: 'Nguyễn Văn A',
        ngaySinh: '10-10-1999',
        email: 'nguyenVanA@gmail.com',
        soDienThoai: '0909090909',
        hinhAnh: 'https://i.pravatar.cc?u=22'
    }

    danhSachHocVien = [
        {
            hoTen: 'Nguyễn Văn A',
            ngaySinh: '10-10-1999',
            email: 'nguyenVanA@gmail.com',
            soDienThoai: '0909090909',
            hinhAnh: 'https://i.pravatar.cc?u=22'
        },
        {
            hoTen: 'Nguyễn Văn B',
            ngaySinh: '20-10-1999',
            email: 'nguyenvanb@gmail.com',
            soDienThoai: '0707707070',
            hinhAnh: 'https://i.pravatar.cc?u=23'
        },
        {
            hoTen: 'Trần Thị C',
            ngaySinh: '20-11-1999',
            email: 'tranthic@gmail.com',
            soDienThoai: '0808080808',
            hinhAnh: 'https://i.pravatar.cc?u=27'
        }
    ]

    renderHocVien = () => {
        return this.danhSachHocVien.map((hv, index) => {
            return <div className='col-6 mt-2' key={index}>
                <UserDetail hocVien={hv} />
            </div>
        })
        
    }
    render() {
        return (
            <div className='container'>
                <h3>Demo props</h3>
                <div className='w-25'>
                    <CardProduct img="https://i.pravatar.cc?u=5" name="Iphone" price="1000" />
                </div>
                <div className='w-25'>
                    <CardProduct img="https://i.pravatar.cc?u=10" name="samsung" price="2000" />
                </div>
                <hr />
                <h3>Thông tin cá nhân</h3>
                <UserDetail hocVien={this.hocVien} />
                <hr />
                <h3>Danh sách học viên</h3>
                <div className='row'>
                    {this.renderHocVien()}
                    
                </div>

            </div>
        )
    }
}
