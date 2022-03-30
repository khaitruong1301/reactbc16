import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class DemoXemChiTiet extends Component {

    dsSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    //Xác định sản phẩm chi tiết là dữ liệu thay đổi => state
    state = {
        sanPhamChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },
        gioHang: [
            { maSP: 2, tenSP: 'Meizu 16Xs', hinhAnh: './img/meizuphone.jpg', soLuong: 1, giaBan: 7600000 },
        ]

    }

    tangGiamSoLuong = (maSPClick, soLuong) => {
        console.log('maSPClick', maSPClick);
        console.log('soLuong', soLuong);
        let { gioHang } = this.state;
        //Tìm ra sp 
        let spGH = gioHang.find(sp => sp.maSP === maSPClick);
        if (spGH) {
            //+ soLuong
            spGH.soLuong += soLuong;
            if (spGH.soLuong < 1) {
                if (window.confirm('Bạn có muốn xoá sp không ???')) {
                    //Xử lý xoá khi số lượng sau khi trừ nhỏ hơn 1
                    gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
                    this.setState({
                        gioHang: gioHang
                    })
                    return;
                }
                spGH.soLuong += 1;
            }
        }
        //setState
        this.setState({
            gioHang: gioHang
        })
    }

    //Định nghĩa hàm xoaGioHang tại nơi chứa state gioHang
    xoaGioHang = (maSPClick) => {
        console.log('maSPClick', maSPClick);
        //Xoá => tìm ra sản phẩm có mã chứa trong giỏ hàng và xoá đi

        let { gioHang } = this.state;
        //Cách 1 dùng findindex
        // let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
        // if (index != -1) {
        //     if (window.confirm('Bạn có muốn xoá sản phẩm khỏi giỏ hàng không ?')) {
        //         gioHang.splice(index, 1)
        //     }
        // }
        if (window.confirm('Bạn có muốn xoá sản phẩm khỏi giỏ hàng không ?')) {
            gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
        }
        //setState
        this.setState({
            gioHang: gioHang
        })
    }

    //State đặt tại đâu thì hàm gọi setState sẽ đặt cùng với state
    themGioHang = (sanPhamClick) => {
        console.log('sanPhamClick', sanPhamClick);
        //Từ sản phẩm click tạo ra sản phẩm có thuộc tính số lượng
        let spGioHang = { ...sanPhamClick, soLuong: 1 };
        //Lấy ra giỏ hàng từ state và xử lý
        let { gioHang } = this.state;
        //Kiểm tra sp có trong giỏ hàng hay chưa
        let spGH = gioHang.find(sp => sp.maSP === sanPhamClick.maSP);
        if (spGH) { // Có trong giỏ hảng
            spGH.soLuong += 1;
        } else {
            //Không tồn tại trong giỏ hàng
            gioHang.push(spGioHang);
        }
        //setState
        this.setState({
            gioHang: gioHang
        })
    }


    xemChiTiet = (sanPhamClick) => {
        // console.log(sanPhamClick);

        //setState
        this.setState({
            sanPhamChiTiet: sanPhamClick
        })
    }

    tinhTongSoLuong = () => {

        let tongSoLuong = this.state.gioHang.reduce((soLuong, spGioHang, index) => {
            return soLuong += spGioHang.soLuong;
        }, 0)

        let tongTien = this.state.gioHang.reduce((tien, spGioHang, index) => {
            return tien += spGioHang.soLuong * spGioHang.giaBan;
        }, 0)
        return `${tongSoLuong} - ${tongTien.toLocaleString()}`;
    }

    render() {
        let { maSP, tenSP, manHinh, cameraSau, cameraTruoc, giaBan, heDieuHanh, hinhAnh, ram, rom } = this.state.sanPhamChiTiet;
        return (
            <div className='container'>
                <div className='text-right'>
                    <span className='text-danger' style={{ cursor: 'pointer' }}>Giỏ hàng({this.tinhTongSoLuong()})</span>
                </div>
                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                {/* <button onClick={()=>{
                    this.xoaGioHang()
                }}>Xoá</button> */}
                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.dsSanPham.map((dienThoai, index) => {
                        return <div className='col-4' key={index}>
                            <SanPham themGioHang={this.themGioHang} sanPham={dienThoai} xemChiTiet={this.xemChiTiet} />
                        </div>
                    })}


                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt='...' height={300} className="w-100" />
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
