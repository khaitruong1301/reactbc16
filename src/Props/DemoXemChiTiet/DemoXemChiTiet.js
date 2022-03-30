import React, { Component } from 'react'

export default class DemoXemChiTiet extends Component {

    dsSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    //Xác định sản phẩm chi tiết là dữ liệu thay đổi => state
    state = {
        sanPhamChiTiet:{ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }

    }

    xemChiTiet = (sanPhamClick) => {
        // console.log(sanPhamClick);

        //setState
        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
    }
    render() {
        let {maSP,tenSP,manHinh,cameraSau,cameraTruoc,giaBan,heDieuHanh,hinhAnh,ram,rom} = this.state.sanPhamChiTiet;
        return (
            <div className='container'>
                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.dsSanPham.map((dienThoai, index) => {
                        return <div className='col-4' key={index}>
                            <div className='card'>
                                <img src={dienThoai.hinhAnh} alt='...' height={300} />
                                <div className='card-body'>
                                    <h3>{dienThoai.tenSP}</h3>
                                    <p>{dienThoai.giaBan.toLocaleString()}</p>
                                    <button className='btn btn-success' onClick={() => {
                                        this.xemChiTiet(dienThoai);
                                    }}>Xem chi tiết</button>
                                </div>
                            </div>
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
