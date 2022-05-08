import axios from 'axios';
import React, { useRef } from 'react'
import { ACCESS_TOKEN, DOMAIN, http } from '../../util/config';

export default function Login(props) {
  const userLoginRef = useRef({
    taiKhoan: '',
    matKhau: ''
  })

  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log('userLogin', userLoginRef.current);

  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await http.post('/api/quanlynguoidung/dangnhap',userLoginRef.current);

      console.log(result);
      //Lưu vào localstorage
      let usLoginResult = result.data.content;

      localStorage.setItem('userLogin', JSON.stringify(usLoginResult));

      localStorage.setItem(ACCESS_TOKEN, usLoginResult.accessToken);

    }catch(err) {
      console.log({err})

    }
  }

  return (
    <form className='container' onSubmit={handleLogin} >
      <h3>Login</h3>
      <div className='form-group'>
        <p>username</p>
        <input className='form-control' name="taiKhoan" id="taiKhoan" onChange={handleChange} />
      </div>
      <div className='form-group'>
        <p>password</p>
        <input className='form-control' name="matKhau" id="matKhau" onChange={handleChange} />
      </div>
      <div className='form-group'>
        <button onClick={handleLogin} type="submit" className='btn btn-success'>Login</button>
      </div>

      <button className='btn btn-link' onClick={() => {
        props.history.goBack();

      }}>Trở về</button>
    </form>
  )
}
