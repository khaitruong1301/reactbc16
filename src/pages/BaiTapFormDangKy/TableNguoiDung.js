import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableNguoiDung extends Component {
  render() {
    console.log(this.props);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Ảnh đại diện</th>
            <th>Họ tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangNguoiDung.map((nd,index)=> {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{nd.taiKhoan}</td>
              <td><img src={`https://i.pravatar.cc?u=${nd.hoTen}`} width={50} height={50} alt="..." /></td>
              <td>{nd.hoTen}</td>
              <td>{nd.matKhau}</td>
              <td>{nd.email}</td>
              <td>{nd.soDienThoai}</td>
              <td>{nd.loaiNguoiDung}</td>
              <td>
                <button className='btn btn-danger' onClick={()=> {
                    const action = {
                      type:'XOA_NGUOI_DUNG',
                      taiKhoan: nd.taiKhoan
                    }
                    this.props.dispatch(action);
                }}>Xoá</button>
                <button className='btn btn-primary ml-2' onClick={()=>{
                    const action = {
                      type:'SUA_NGUOI_DUNG',
                      nguoiDung:nd
                    };
                    this.props.dispatch(action);
                }}>Sửa</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}




// => { return .... } tương đương  => ( ... )
const mapStateToProps = (rootReducer) => ({
  mangNguoiDung: rootReducer.formDangKyReducer.mangNguoiDung,
})
export default connect(mapStateToProps)(TableNguoiDung);





// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class TableNguoiDung extends Component {
//   render() {
//     return (
//       <div>TableNguoiDung</div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(TableNguoiDung)