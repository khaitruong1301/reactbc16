import React, { Component } from 'react'
//import connect => lấy mangXucXac về render lên hình
import {connect} from 'react-redux';
class XucXac extends Component {

    renderKetQua = () => {

        let tongDiem = this.props.mangXucXac.reduce((diem,xucXac)=>{
            return diem + xucXac.diem;
        },0)

        let ketQua = tongDiem>11 ? 'Tài' : 'Xỉu';

        return <p className='display-4 text-center'>{ketQua} - {tongDiem}</p> 
    }


    render() {
        console.log(this.props);
        return (
            <div className='row mt-3 text-center'>
                <div className='col-4'>
                    <button className='btn btn-danger'>
                        <div className='display-4 p-5' onClick={() => {
                            //Tạo ra 1 action gửi lên store
                            const action = {
                                type:'DAT_CUOC',
                                banChon:true
                            }
                            //Dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>
                            TÀI
                        </div>
                    </button>
                </div>
                <div className='col-4'>
                    {this.props.mangXucXac.map((xucXac,index)=> {
                        return  <img key={index} width={50} height={50} src={xucXac.src} alt='...' />
                    })}
                   
                    {/* <img width={50} height={50} src='./img/gameXucXac/1.png' alt='...' />
                    <img width={50} height={50} src='./img/gameXucXac/1.png' alt='...' /> */}
                    <div className='mt-3'>
                        {this.renderKetQua()}
                        {/* <p className='display-4 text-center'>Tài - 18</p> */}
                    </div>
                </div>
                <div className='col-4'>
                    <button className='btn btn-danger'>
                        <div className='display-4 p-5' onClick={() => {
                            //Tạo ra 1 action gửi lên store
                            const action = {
                                type:'DAT_CUOC',
                                banChon:false
                            }
                            //Dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>
                            XỈU
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.XucXacReducer.mangXucXac
    }
}
export default connect(mapStateToProps)(XucXac) 
/*
    Xử lý dispatch: 
    +Cách 1: Định nghĩa hàm mapDispatchToProps truyền vào tham số thứ 2 của hàm connect 
    +Cách 2: Bỏ trống tham số thứ 2 (Nếu truyền mapdispatch thì sẽ không sử dụng được cách này)
*/
