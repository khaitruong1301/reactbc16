import React, { Component } from 'react'
//Kết nối redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
              <td>{spGH.maSP}</td>
              <td>{spGH.tenSP}</td>
              <td>
                <img src={spGH.hinhAnh} width={50} height={50} />
              </td>
              <td>{spGH.giaBan}</td>
              <td>
                <button className='btn btn-primary mr-2' onClick={()=>{
                  this.props.tangGiamSoLuong(spGH.maSP,1)
                }}>+</button>
                {spGH.soLuong}
                <button className='btn btn-primary ml-2' onClick={()=>{
                  this.props.tangGiamSoLuong(spGH.maSP,-1)
                }}>-</button>
              </td>
              <td>{spGH.giaBan * spGH.soLuong}</td>
              <td>
                <button className='btn btn-danger' onClick={()=>{
                  this.props.xoaGioHang(spGH.maSP);
                }}>Xoá</button>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    )
  }
}


//Lấy state từ redux về biến thành props component

const mapStateToProps = (rootReducer) => {
  //Muốn lấy dữ liệu nào về thì tạo ra thuộc tính lấy giá trị từ redux
  return {
    gioHang: rootReducer.gioHangState
  }
}

//Viết mapdispatchtoprops định nghĩa hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
      xoaGioHang: (maSPClick) => {
        console.log('maSPClick',maSPClick);
        const action = {
          type:'XOA_GIO_HANG',
          maSPClick
        }
        //đưa dữ liệu lên redux
        dispatch(action);
      },
      tangGiamSoLuong: (maSPClick,soLuong) => {
        console.log(maSPClick,soLuong);
        //Tạo ra action gửi lên reducer
        const action = {
          type:'TANG_GIAM_SO_LUONG',
          maSPClick,
          soLuong
        }
        //Dùng hàm dispatch từ redux để đưa dữ liệu lên store
        dispatch(action);

      }
  }
} 

//Cú pháp tạo ra 1 component có liên kết redux
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);