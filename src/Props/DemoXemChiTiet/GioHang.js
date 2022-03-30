//rcc
import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let { gioHang,xoaGioHang,tangGiamSoLuong } = this.props; //[{...},{...},{...}]
        console.log(gioHang)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img src={spGH.hinhAnh} width={50} height={50} /></td>
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <td>
                                <button className='btn btn-primary mr-2' onClick={()=>{
                                    tangGiamSoLuong(spGH.maSP,1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button 
                                onClick={()=>{
                                    tangGiamSoLuong(spGH.maSP,-1)
                                }}className='btn btn-primary ml-2'>-</button>
                            </td>
                            <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{
                                    xoaGioHang(spGH.maSP)
                                }}>Xoá</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        )
    }
}
