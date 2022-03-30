//rcc
import React, { Component } from 'react'

export default class SanPham extends Component {



    render() {
        //Dùng props để lấy thông tin từ component cha truyền vào
        let { sanPham } = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} alt='...' height={300} />
                <div className='card-body'>
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => {
                        // this.xemChiTiet(sanPham);
                        this.props.xemChiTiet(sanPham)

                    }}>Xem chi tiết</button>
                    <button onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }} className='btn btn-danger ml-2'>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
