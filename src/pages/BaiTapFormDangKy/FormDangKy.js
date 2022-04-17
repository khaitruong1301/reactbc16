import React, { Component } from 'react';
import {connect} from 'react-redux';
 class FormDangKy extends Component {

    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: '',
            loaiNguoiDung: 'QuanTri'
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: '',
        }

    }

    handleChange = (event) => {
        //Thẻ xảy ra sự kiện
        let { id, value } = event.target; // id = 'taiKhoan'  value = 'cybersoft'
        //Lấy ra giá trị tự thêm attribute
        let dataType = event.target.getAttribute('data-type');
        // console.log(dataType)
        //Xử lý values
        let newValues = {...this.state.values};
        newValues[id] = value;
        //Xử lý errors
        let newErrors = {...this.state.errors};
        let messageError = '';
        if(value.trim() === ''){
            messageError = id + ' không được bỏ trống !';
        }
        if(dataType === 'email') {
            let regexEmail =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(!regexEmail.test(value)){
                messageError = 'email không đúng định dạng !';
            }

        }

        newErrors[id] = messageError;
        //setState lại cho values và errors
        this.setState({
            values:newValues,
            errors:newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();//Chặn sự kiện reload lại trang của browser
        // console.log(123)
        //Bắt lỗi khi form không hợp lệ sẽ không cho submit
        let {errors,values} = this.state;
        for(let key in errors) {
            if(errors[key] !== ''){
                alert(`${key} không hợp lệ !`);
                return ;
            }
        }

        for(let key in values) {
            if(values[key] === '') { //values không điền thị sẽ bị lỗi
                alert(`${key} không hợp lệ !`);
                return;
            }
        }

        console.log('Đã đăng ký');
        //Đưa dữ liệu lên redux
        const action = {
            type:'DANG_KY',
            nguoiDung: this.state.values
        };
        this.props.dispatch(action);
    }

    render() {
        console.log(this.state)
        return (
            
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white font-weight-bold'>Bài tập form</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài khoản</p>
                                <input className='form-control' id="taiKhoan" name="taiKhoan" onChange={this.handleChange} />
                                <p className='text text-danger'>{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mật khẩu</p>
                                <input className='form-control' id="matKhau" name="matKhau" onChange={this.handleChange} />
                                <p className='text text-danger'>{this.state.errors.matKhau}</p>

                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input data-type="email" className='form-control' id="email" name="email" onChange={this.handleChange} />
                                <p className='text text-danger'>{this.state.errors.email}</p>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input className='form-control' id="hoTen" name="hoTen" onChange={this.handleChange} />
                                <p className='text text-danger'>{this.state.errors.hoTen}</p>
                                
                            </div>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input data-type="phone" className='form-control' id="soDienThoai" name="soDienThoai" onChange={this.handleChange}  />
                                <p className='text text-danger'>{this.state.errors.soDienThoai}</p>

                            </div>
                            <div className='form-group'>
                                <p>Loại người dùng</p>
                                <select className='form-control' id="loaiNguoiDung" name='loaiNguoiDung' onChange={this.handleChange}>
                                    <option value="QuanTri">QuanTri</option>
                                    <option value="NguoiDung">NguoiDung</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit'>Đăng ký</button>
                </div>
            </form>
        )
    }
}





export default connect()(FormDangKy);